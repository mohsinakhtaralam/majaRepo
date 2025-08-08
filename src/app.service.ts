import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Maja! Welcome to the NestJS application.';
  }
}
