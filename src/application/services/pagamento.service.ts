import { Dependencies, Inject, Injectable } from '@nestjs/common';

import { CreatePagamentoDto } from '../dto/pagamento.dto';
import { Pagamento } from '../../domain/entities/pagamento.entity';
import type { IPagamentoRepository } from '../../domain/repositories/pagamento.repository';

@Injectable()
@Dependencies('payment')
export class PagamentoService {
  constructor(
    @Inject('IPagamentoRepository')
    private readonly repository: IPagamentoRepository,
  ) {}

  async create(dto: CreatePagamentoDto): Promise<Pagamento> {
    const pagamento = Pagamento.create(dto);

    return this.repository.create(pagamento);
  }
}
