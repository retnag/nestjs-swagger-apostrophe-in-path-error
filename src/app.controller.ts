import { Controller, Post, Request } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AType } from '@src/AType';

@Controller()
export class AppController {
  constructor() {}

  @Post('hello')
  @ApiOperation({
    summary:
      'Authenticate your session to access the other endpoints in the API.',
  })
  async login(@Request() req) {
    req.session.user = req.user;
    return null;
  }
}
