import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('recados')
export class RecadoEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 255 })
  public texto: string;
  //Muitos recados podem ser enviados por uma unica pesso (emissor)

  // Muitos recados podem ser enviados por uma única pessoa (emissor)
  @ManyToOne(() => Pessoa)
  // Especifica a coluna "de" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'de' })
  de: Pessoa;

  // Muitos recados podem ser enviados para uma única pessoa (destinatário)
  @ManyToOne(() => Pessoa)
  // Especifica a coluna "para" que armazena o ID da pessoa que recebe o recado
  
  @JoinColumn({ name: 'para' })
  para: Pessoa;
  @Column({ type: 'boolean', default: false })
  public lido: boolean;

  @Column({ type: 'date' })
  public data: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @CreateDateColumn()
  updatedAt?: Date;
}
