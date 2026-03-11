import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) { }

  async create(createPessoaDto: CreatePessoaDto) {
    try{
      const dadosPessoa = {
      nome: createPessoaDto.nome,
        passwordHash: createPessoaDto.passwordHash,
        email: createPessoaDto.email,
      };
      const novaPessoa = this.pessoaRepository.create(dadosPessoa);
      await this.pessoaRepository.save(novaPessoa);
      return novaPessoa;
      
    }catch(error) {
      const databaseError = error as { code?: string };

      if(databaseError.code === '23505'){
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }


  findAll() {
    return this.pessoaRepository.find({
      order: {
        id: 'desc'
      }
    });
  }

  async findOne(id: number) {
    const pessoa = await this.pessoaRepository.findOneBy({ id });

    if (!pessoa) {
      throw new NotFoundException(`Pessoa com id ${id} não encontrada`);
    }

    return pessoa;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const pessoa = await this.findOne(id);

    Object.assign(pessoa, updatePessoaDto);

    try {
      return await this.pessoaRepository.save(pessoa);
    } catch (error) {
      const databaseError = error as { code?: string };

      if (databaseError.code === '23505') {
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const person = await this.pessoaRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException(`Pessoa com id ${id} não encontrada`);
    }
    await this.pessoaRepository.remove(person);
  }
}
