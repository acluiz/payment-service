import { Pagamento } from '../entities/pagamento.entity';

export interface IPagamentoRepository {
  create(pagamento: Pagamento): Promise<Pagamento>;
}
