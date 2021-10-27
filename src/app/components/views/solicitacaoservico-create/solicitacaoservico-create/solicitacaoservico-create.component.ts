import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import { ServicoPetSitterDTO3 } from 'src/model/servicopetsiter.dto3';
import { SolicitacaoServico } from './../../../../../model/solicitacaoservico';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitacaoServicoService } from 'src/service/domain/solicitacaoservico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacaoservico-create',
  templateUrl: './solicitacaoservico-create.component.html',
  styleUrls: ['./solicitacaoservico-create.component.css']
})
export class SolicitacaoservicoCreateComponent implements OnInit {
  precoServico:string=''
  sps:ServicoPetSitterDTO3 = {
    servicoId: '',
    descricao: '',
    nomeServico: '',
    nomePetSitter:'',
    sobrenome:'',
    preco:'',
    usuarioId:''
  }
  obj: SolicitacaoServico = {
    solicitacaoServicoId:'',
    servicoId:'',
    clienteId:'',
    petSitterId:'',
    dataSolicitacao:'',
    precoServico:0,
    descricaoSolicitacao:'',
    dataInicio:'',
    dataFim:''
  }
  clienteId:string=''
  servicoId:string=''
  dataInicio:string=''
  dataFim:string=''
  petSitterId:string=''

  constructor(private solicitacaoServicoService: SolicitacaoServicoService, private route: ActivatedRoute, private router:Router, private servicoPetSitterService: ServicoPetSitterService) { }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id')!
    this.servicoId = this.route.snapshot.paramMap.get('id_servico')!
    this.petSitterId = this.route.snapshot.paramMap.get('id_petsitter')!
    this.dataInicio = this.route.snapshot.paramMap.get('data_inicio')!
    this.dataFim = this.route.snapshot.paramMap.get('data_fim')!
    this.precoServico = this.route.snapshot.paramMap.get('p')!
    this.findByPetSitterAndServico()
  }
  findByPetSitterAndServico() {
    this.servicoPetSitterService.findByPetSitterAndServico(this.petSitterId, this.servicoId).subscribe((resposta => {
      this.sps = resposta
    }))
  }
  create() {
    this.obj.dataInicio = this.dataInicio
    this.obj.dataFim = this.dataFim
    this.obj.precoServico = Number(this.precoServico)
    this.solicitacaoServicoService.create(this.clienteId, this.servicoId, this.petSitterId, this.obj).subscribe((resposta => {
      this.obj = resposta
    }), err => {
      console.log(err)
    })
  }
  cancel() {
    this.router.navigate([`solicitacao/${this.clienteId}/servico/${this.servicoId}/datainicio/${this.dataInicio}/datafim/${this.dataFim}/petsitter/${this.petSitterId}/create`])
  }

}
