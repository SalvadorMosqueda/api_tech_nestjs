import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { RestApiRequest, Swagger } from './config';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Swagger({
    RestApi: RestApiRequest.get,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
