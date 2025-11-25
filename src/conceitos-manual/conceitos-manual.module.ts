import { Module } from "@nestjs/common";
import { ConceitosAutomaticoService } from "./conceitos-manual.service";

@Module({
    providers:[ConceitosAutomaticoService]
})

export class ConceitosManualModule {
    constructor(private conceitosAutomaticoService: ConceitosAutomaticoService){}

    
    metodoTeste(){
        return this.conceitosAutomaticoService.solucionaHome()
    }
}