import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) { }

  async getUsers() {
    return await this.prisma.store.findMany()
  }
}
