import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/model/servico';
import { ServicoService } from 'src/service/domain/servico.service';

@Component({
  selector: 'app-servicos-delete-all',
  templateUrl: './servicos-delete-all.component.html',
  styleUrls: ['./servicos-delete-all.component.css']
})
export class ServicosDeleteAllComponent implements OnInit {
  servicoId:string=''
  servico: Servico = {
    servicoId: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: ServicoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicoId = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  findById() {
    this.service.findById(this.servicoId).subscribe((resposta => {
      this.servico = resposta
    }))
  }
  delete() {
    this.service.delete(this.servicoId).subscribe((resposta => {
      this.service.mensagem('Serviço removido com sucesso!')
      this.router.navigate(['/servicos/all'])
    }), err => {
      this.service.mensagem('Não foi possível remover o serviço. Possui PetSitters associados!')
    })
  }
  cancel() {
    this.router.navigate(['/servicos/all'])
  }
}
