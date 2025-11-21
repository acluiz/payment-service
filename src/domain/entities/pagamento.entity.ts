import { CreatePagamentoDto } from '../../application/dto/pagamento.dto';

export class Pagamento {
  constructor(
    public readonly codAss: number,
    public readonly dataPagamento: string,
    public readonly valorPago: number,
  ) {}

  public static create(dto: CreatePagamentoDto): Pagamento {
    const day = String(dto.dia).padStart(2, '0');
    const month = String(dto.mes).padStart(2, '0');

    const paymentDate = `${dto.ano}-${month}-${day}`;

    return new Pagamento(dto.codAss, paymentDate, dto.valorPago);
  }
}
