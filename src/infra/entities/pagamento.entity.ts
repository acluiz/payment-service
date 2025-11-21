import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pagamentos')
export class Pagamento {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: 'int' })
  codAss: number;

  @Column({ type: 'date' })
  dataPagamento: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string): number => parseFloat(value),
    },
  })
  valorPago: number;
}
