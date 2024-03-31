import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/healthy')
  healthCheck() {
    return HttpStatus.OK;
  }
}
