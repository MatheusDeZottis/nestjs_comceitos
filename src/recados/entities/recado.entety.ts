import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recados')
export class RecadoEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar', length: 255})
    public texto: string;

    @Column({type: 'varchar', length: 50})
    public de: string;

    @Column({type: 'varchar', length: 50})
    public para: string;

    @Column({type: 'boolean', default: false})
    public lido: boolean;
    
    @Column({type: 'date'})
    public data: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @CreateDateColumn()
    updatedAt?: Date;
}