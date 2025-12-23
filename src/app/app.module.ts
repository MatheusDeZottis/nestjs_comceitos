import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RecadosModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '123456',
      autoLoadEntities: true, // carrega entidade sem precisar especificar 
      synchronize: true, // cria as tabelas automaticamente, isso não é recomendado para produção

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
