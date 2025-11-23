import { Controller, Post, Body } from '@nestjs/common';

import { CreatePagamentoDto } from '../application/dto/pagamento.dto';
import { PagamentoService } from '../application/services/pagamento.service';

@Controller('pagamentos')
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentoService) {}

  @Post()
  async create(@Body() dto: CreatePagamentoDto) {
    const payment = await this.pagamentosService.create(dto);

    return payment;
  }
}
