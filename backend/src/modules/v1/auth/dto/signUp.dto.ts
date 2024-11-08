// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class SignUp {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
