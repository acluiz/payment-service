import { CreatePagamentoDto } from '../../application/dto/pagamento.dto';

export class Pagamento {
  constructor(
    public readonly codAss: number,
    public readonly dataPagamento: string,
    public readonly valorPago: number,
  ) {}

  public static create(dto: CreatePagamentoDto): Pagamento {
    const dataPagamento = `${dto.dia}/${dto.mes}/${dto.ano}`;

    return new Pagamento(dto.codAss, dataPagamento, dto.valorPago);
  }
}
