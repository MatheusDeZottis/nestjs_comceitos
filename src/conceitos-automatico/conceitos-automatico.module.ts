import { Module } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';

@Module({
  providers: [ConceitosAutomaticoService]
})
export class ConceitosAutomaticoModule {}
