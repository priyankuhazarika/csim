import { Module } from '@nestjs/common';
import { OrgsController } from './orgs.controller';
import { OrgsService } from './orgs.service';

@Module({
  providers: [OrgsService],
  controllers: [OrgsController],
})
export class OrgsModule {}
