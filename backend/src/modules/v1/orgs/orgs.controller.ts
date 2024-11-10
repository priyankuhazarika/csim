import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ErrorResponse } from '../../../core/common/dto/express-error-response.dto';
import { CommonResponse } from '../../../core/common/dto/express-response.dto';
import { AuthenticatedRequest } from '../../../core/common/types/express-authenticated-request.interface';
import { AuthorizationGuard } from '../../../guards/authorization.guard';
import { OrgsService } from './orgs.service';

@Controller('orgs')
@UseGuards(AuthorizationGuard)
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: CommonResponse,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorResponse,
  })
  async me(@Req() request: AuthenticatedRequest) {
    console.log('request', request);
    return {
      message: 'User',
      statusCode: HttpStatus.OK,
    };
  }
}
