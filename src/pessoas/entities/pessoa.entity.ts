import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    @IsEmail()
    public email: string;
    
    @Column({ length: 255 })
    public passwordHash: string;
    
    @Column()
    public nome: string;

}