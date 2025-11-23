import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { CreatePagamentoDto } from '../dto/pagamento.dto';
import { Pagamento } from '../../domain/entities/pagamento.entity';

import type { IPagamentoRepository } from '../../domain/repositories/pagamento.repository';

import 'dotenv/config';

@Injectable()
export class PagamentoService {
  constructor(
    private http: HttpService,
    @Inject('IPagamentoRepository')
    private readonly repository: IPagamentoRepository,
  ) {}

  async sendEvent(payload: Pagamento) {
    const baseUrl = process.env.API_GATEWAY_BASE_URL || '';

    await lastValueFrom(this.http.post(`${baseUrl}/pagamento/evento`, payload));
  }

  async create(dto: CreatePagamentoDto): Promise<Pagamento> {
    const pagamento = Pagamento.create(dto);

    await this.repository.create(pagamento);
    await this.sendEvent(pagamento);

    return pagamento;
  }
}
