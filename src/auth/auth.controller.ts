import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    console.log('Auth controller');
  }

  @Post('login')
  login() {
    console.log('Auth login controller');
    this.authService.login();
  }

  @Post('signup')
  register() {
    console.log('Auth signup controller');
    this.authService.register();
  }
}
