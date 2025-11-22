import { Controller, Post, Body, Inject } from '@nestjs/common';

import { CreatePagamentoDto } from '../application/dto/pagamento.dto';
import { PagamentoService } from '../application/services/pagamento.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('pagamentos')
export class PagamentosController {
  constructor(
    private readonly pagamentosService: PagamentoService,
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  async criar(@Body() dto: CreatePagamentoDto) {
    const payment = await this.pagamentosService.create(dto);

    this.client.emit('payment_created', {
      ...payment,
      timestamp: new Date(),
    });

    return payment;
  }
}
