import { Inject, Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from '../dto/pagamento.dto';
import type { IPagamentoRepository } from '../../domain/repositories/pagamento.repository';
import { Pagamento } from '../../domain/entities/pagamento.entity';

@Injectable()
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
