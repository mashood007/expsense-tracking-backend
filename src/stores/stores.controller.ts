import { Controller, Get } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storeService: StoresService) { }

  @Get('')
  async index() {
    return await this.storeService.getUsers()
  }
}
