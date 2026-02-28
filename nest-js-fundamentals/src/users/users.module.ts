import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TestUsersService } from './test.users.serivce';

@Module({
  providers: [
    {
      provide: UsersService,
      useClass: TestUsersService,
      
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
