import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserResponse } from '@supabase/supabase-js';
import { Response } from 'express';
import { ErrorResponseDto } from '../../../core/common/dto/express-error-response.dto';
import { CommonResponseDto } from '../../../core/common/dto/express-response.dto';
import { AuthenticatedRequest } from '../../../core/common/types/express-authenticated-request.interface';
import { AuthorizationGuard } from '../../../guards/authorization.guard';
import { AuthService } from './auth.service';
import { SignUpReqBody } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User created successfully.',
    type: CommonResponseDto<UserResponse['data']['user']>,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ErrorResponseDto,
  })
  async signUp(
    @Body() body: SignUpReqBody,
    @Res({ passthrough: true }) response: Response,
  ): Promise<CommonResponseDto<UserResponse['data']['user']>> {
    try {
      const userData = await this.authService.createNewUser(
        body.email,
        body.password,
      );

      response.cookie(
        'CSIM_ACCESS_TOKEN',
        userData?.data?.session.access_token,
        {
          expires: new Date(userData?.data?.session.expires_at),
        },
      );
      response.cookie(
        'CSIM_REFRESH_TOKEN',
        userData?.data?.session.refresh_token,
      );

      return {
        statusCode: HttpStatus.CREATED,
        data: userData.data.user,
        message: 'User successfully created',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  @UseGuards(AuthorizationGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    type: CommonResponseDto<UserResponse['data']['user']>,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorResponseDto,
  })
  async me(
    @Req() request: AuthenticatedRequest,
  ): Promise<CommonResponseDto<UserResponse['data']['user']>> {
    return {
      message: 'User',
      data: request.user,
      statusCode: HttpStatus.OK,
    };
  }
}
