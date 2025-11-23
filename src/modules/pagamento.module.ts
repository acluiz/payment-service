import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { Pagamento } from '../infra/entities/pagamento.entity';
import { PagamentosController } from '../controllers/pagamento.controller';
import { PagamentoService } from '../application/services/pagamento.service';
import { PagamentoRepository } from '../infra/repositories/pagamento.repository';

import 'dotenv/config';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento]), HttpModule],
  controllers: [PagamentosController],
  providers: [
    PagamentoService,
    {
      provide: 'IPagamentoRepository',
      useClass: PagamentoRepository,
    },
  ],
})
export class PagamentoModule {}
