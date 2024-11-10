// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { CommonResponse } from 'src/core/common/dto/express-response.dto';

export class Profile extends CommonResponse {
  @ApiProperty()
  aud: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  user_metadata: object;
}
