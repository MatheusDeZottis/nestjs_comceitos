import { IsEmail } from "class-validator";
import { RecadoEntity } from "src/recados/entities/recado.entity";
import { Column, Entity,  OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column(
        { unique: true }
    )
    @IsEmail()
    public email!: string;
    
    @Column({ length: 255 })
    public passwordHash!: string;
    
    @Column()
    public nome!: string;

    @OneToMany(() => RecadoEntity, recado => RecadoEntity)
    recadosEnviados!: RecadoEntity[]
} 