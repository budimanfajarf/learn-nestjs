import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {
    console.log('Auth service');
  }

  login() {
    console.log('Auth login service');
  }

  register() {
    console.log('Auth register service');
  }
}
