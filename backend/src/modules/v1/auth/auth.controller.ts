import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignUp } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signUp(
    @Body() body: SignUp,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      console.log('hehe');
      const userData = await this.authService.createNewUser(
        body.email,
        body.password,
      );

      response.cookie('CSIM_ACCESS_TOKEN', userData.session.access_token);
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
}
