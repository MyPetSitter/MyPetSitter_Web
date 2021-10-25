import { Servico } from 'src/model/servico';
import { ServicoService } from 'src/service/domain/servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-read-all',
  templateUrl: './servicos-read-all.component.html',
  styleUrls: ['./servicos-read-all.component.css']
})
export class ServicosReadAllComponent implements OnInit {
  servicos: Servico[] =[]
  constructor(private service: ServicoService) { }
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes']
  ngOnInit(): void {
    this.findAllServicos()
  }
  findAllServicos() {
    this.service.findAll().subscribe((resposta => {
      this.servicos = resposta
    }))
  }
  
}
