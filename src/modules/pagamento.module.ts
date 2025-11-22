import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Pagamento } from '../infra/entities/pagamento.entity';
import { PagamentosController } from '../controllers/pagamento.controller';
import { PagamentoService } from '../application/services/pagamento.service';
import { PagamentoRepository } from '../infra/repositories/pagamento.repository';

import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pagamento]),
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`${process.env.RMQ_URL}`],
          queue: 'pagamentos',
        },
      },
    ]),
  ],
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
