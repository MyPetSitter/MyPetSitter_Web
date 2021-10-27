import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/model/servico';
import { ServicoService } from 'src/service/domain/servico.service';

@Component({
  selector: 'app-servicos-create-all',
  templateUrl: './servicos-create-all.component.html',
  styleUrls: ['./servicos-create-all.component.css']
})
export class ServicosCreateAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes']
  servico: Servico = {
    servicoId: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: ServicoService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.service.create(this.servico).subscribe((resposta => {
      this.service.mensagem('Serviço cadastrado com sucesso!')
      this.router.navigate(['servicos/all'])
    }), err => {
      this.service.mensagem('Por favor, valide os campos!')
    })
  }
}