import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UserModule } from './user/user.module';
import { UserRestModule } from './user-rest/user-rest.module';

@Module({
  imports: [NinjasModule, UserModule, UserRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
