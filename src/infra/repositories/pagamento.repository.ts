import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Pagamento } from '../entities/pagamento.entity';

@Injectable()
export class PagamentoRepository {
  constructor(
    @InjectRepository(Pagamento)
    private readonly repository: Repository<Pagamento>,
  ) {}

  async create(pagamento: Pagamento): Promise<Pagamento> {
    const pagamentoInMemory = this.repository.create(pagamento);

    return this.repository.save(pagamentoInMemory);
  }
}
