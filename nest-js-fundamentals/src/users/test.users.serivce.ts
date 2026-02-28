import { Injectable } from '@nestjs/common';

@Injectable()
export class TestUsersService {
  findAllf() {
    return `This action returns all users from test service`;
  }
}
