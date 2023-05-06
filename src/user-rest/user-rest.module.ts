import { Module } from '@nestjs/common';
import { UserRestService } from './user-rest.service';
import { UserRestController } from './user-rest.controller';

@Module({
  controllers: [UserRestController],
  providers: [UserRestService]
})
export class UserRestModule {}
