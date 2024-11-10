import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { ErrorResponse } from '../../../core/common/dto/express-error-response.dto';
import { AuthenticatedRequest } from '../../../core/common/types/express-authenticated-request.interface';
import { AuthorizationGuard } from '../../../guards/authorization.guard';
import { AuthService } from './auth.service';
import { Login, LoginReqBody } from './dto/login.dto';
import { Profile } from './dto/profile.dto';
import { SignUp, SignUpReqBody } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User created successfully.',
    type: SignUp,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ErrorResponse,
  })
  async signUp(
    @Body() body: SignUpReqBody,
    @Res({ passthrough: true }) response: Response,
  ): Promise<SignUp> {
    try {
      const userResponse = await this.authService.createNewUser(
        body.email,
        body.password,
      );

      if (userResponse?.error) {
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: userResponse.error.message || 'User creation failed',
            error: userResponse.error.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      response.cookie(
        'CSIM_ACCESS_TOKEN',
        userResponse?.data?.session.access_token,
      );
      response.cookie(
        'CSIM_REFRESH_TOKEN',
        userResponse?.data?.session.refresh_token,
      );

      return {
        email: userResponse.data.user.email,
        id: userResponse.data.user.id,
        aud: userResponse.data.user.aud,
        created_at: userResponse.data.user.created_at,
        updated_at: userResponse.data.user.updated_at,
        user_metadata: userResponse.data.user.user_metadata,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'Error',
          message: error.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User logged in successfully.',
    type: Login,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: ErrorResponse,
  })
  async login(
    @Body() body: LoginReqBody,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Login> {
    try {
      const userResponse = await this.authService.loginUser(
        body.email,
        body.password,
      );

      console.log('login', userResponse);

      if (userResponse?.error) {
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: userResponse.error.message || 'User creation failed',
            error: userResponse.error.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      response.cookie(
        'CSIM_ACCESS_TOKEN',
        userResponse?.data?.session.access_token,
      );
      response.cookie(
        'CSIM_REFRESH_TOKEN',
        userResponse?.data?.session.refresh_token,
      );

      return {
        email: userResponse.data.user.email,
        id: userResponse.data.user.id,
        aud: userResponse.data.user.aud,
        created_at: userResponse.data.user.created_at,
        updated_at: userResponse.data.user.updated_at,
        user_metadata: userResponse.data.user.user_metadata,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'Error',
          message: error.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('profile')
  @UseGuards(AuthorizationGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    type: Profile,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorResponse,
  })
  async profile(@Req() request: AuthenticatedRequest): Promise<Profile> {
    return {
      email: request.user.email,
      id: request.user.id,
      aud: request.user.aud,
      created_at: request.user.created_at,
      updated_at: request.user.updated_at,
      user_metadata: request.user.user_metadata,
    };
  }
}
