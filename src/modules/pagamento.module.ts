import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Pagamento } from '../infra/entities/pagamento.entity';
import { PagamentosController } from '../controllers/pagamento.controller';
import { PagamentoService } from '../application/services/pagamento.service';
import { PagamentoRepository } from '../infra/repositories/pagamento.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pagamento]),
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://lwjuwfdp:yioROq3lEPbgUCc1aoBkhQRUMY7A6RsB@jackal.rmq.cloudamqp.com/lwjuwfdp',
          ],
          queue: 'payment',
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
