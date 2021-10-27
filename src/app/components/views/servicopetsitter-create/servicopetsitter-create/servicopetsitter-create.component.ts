import { ServicoPetSitterDTO } from '../../../../../model/servicopetsitterdto';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from 'src/service/domain/servico.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/model/servico';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';

@Component({
  selector: 'app-servicopetsitter-create',
  templateUrl: './servicopetsitter-create.component.html',
  styleUrls: ['./servicopetsitter-create.component.css']
})
export class ServicopetsitterCreateComponent implements OnInit {
  preco:string = ''
  descricao:string = ''
  servicoPetSitter: ServicoPetSitterDTO = {
    servicoPetSitterId: '',
    petSitterId: '',
    servicoId: '',
    nomeServico: '',
    descricao: '',
    preco: ''
  }
  usuarioId: String = ''
  servico: Servico = {
    servicoId: '',
    nome: '',
    descricao: ''
  }
  constructor(private servicoService: ServicoService, private route: ActivatedRoute, private servicoPetSitterService: ServicoPetSitterService, private router: Router) { }
  
  ngOnInit(): void {
    this.servico.servicoId = this.route.snapshot.paramMap.get('id_servico')!
    this.usuarioId = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  findById() {
    this.servicoService.findById(this.servico.servicoId).subscribe((resposta => {
      this.servico = resposta
    }))

  }
  create() {
    this.servicoPetSitter.preco = this.preco
    this.servicoPetSitter.descricao = this.descricao
    this.servicoPetSitter.petSitterId = this.route.snapshot.paramMap.get('id')!
    this.servicoPetSitter.servicoId = this.route.snapshot.paramMap.get('id_servico')!
    this.servicoPetSitterService.create(this.servicoPetSitter).subscribe((resposta => {
      this.servicoPetSitter = resposta
      this.servicoPetSitterService.mensagem("Inclusão de serviço realizada com sucesso!")
      this.router.navigate(['meusservicos'])
    }), error=> {
      this.servicoPetSitterService.mensagem(error.message)
      for(var i = 0; i < error.errors.length; i++) {
        this.servicoPetSitterService.mensagem(error.errors[i].message)
      }
    })
  }
  cancel() {
    this.router.navigate([`/servicosdisponiveis/${this.usuarioId}`])
  }

}
