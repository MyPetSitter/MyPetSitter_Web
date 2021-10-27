import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from 'src/service/domain/servico.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/model/servico';

@Component({
  selector: 'app-servico-update-all',
  templateUrl: './servico-update-all.component.html',
  styleUrls: ['./servico-update-all.component.css']
})
export class ServicoUpdateAllComponent implements OnInit {
  servicoId:string=''
  servico: Servico = {
    servicoId: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: ServicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.servicoId = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  findById() {
    this.service.findById(this.servicoId).subscribe((resposta => {
      this.servico = resposta
    }))
  }
  update() {
    this.service.update(this.servicoId, this.servico).subscribe((resposta => {
      this.service.mensagem('Serviço atualizado com sucesso!')
      this.router.navigate(['servicos/all'])
    }))
  }
  cancel() {
    this.router.navigate(['servicos/all'])
  }
}
