import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pagamento } from './infra/entities/pagamento.entity';
import { PagamentoModule } from './modules/pagamento.module';

import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      entities: [Pagamento],
    }),
    PagamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
