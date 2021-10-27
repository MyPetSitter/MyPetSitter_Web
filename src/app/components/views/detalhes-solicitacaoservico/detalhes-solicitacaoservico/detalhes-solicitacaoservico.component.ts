import { SolicitacaoServicoService } from 'src/service/domain/solicitacaoservico.service';
import { DatePipe } from '@angular/common';
import { ServicoPetSitterDTO3 } from 'src/model/servicopetsiter.dto3';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { StorageService } from 'src/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/model/usuario.dto';
import { ServicoPetSitterDTO } from 'src/model/servicopetsitterdto';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { SolicitacaoServico } from 'src/model/solicitacaoservico';

@Component({
  selector: 'app-detalhes-solicitacaoservico',
  templateUrl: './detalhes-solicitacaoservico.component.html',
  styleUrls: ['./detalhes-solicitacaoservico.component.css']
})
export class DetalhesSolicitacaoservicoComponent implements OnInit {
  precoServico:number=0
  userNameCliente:string=''
  clienteId:String=''
  servicoId:string=''
  petSitterId:string=''
  _dataInicioForm = new FormControl(moment())
  _dataFimForm = new FormControl(moment())
  _dataFim:string=''
  _dataInicio:string=''

  constructor(private route: ActivatedRoute, private storage: StorageService, private usuarioService: UsuarioService, private servicoPetSitterService: ServicoPetSitterService, private datePipe: DatePipe, private router: Router, private solicitacaoService: SolicitacaoServicoService) { }
  obj: SolicitacaoServico = {
    solicitacaoServicoId:'',
    servicoId:'',
    clienteId:'',
    petSitterId:'',
    dataSolicitacao:'',
    precoServico: 0,
    descricaoSolicitacao:'',
    dataInicio:'',
    dataFim:''
  }
  sps: ServicoPetSitterDTO3 = {
    servicoId: '',
    descricao: '',
    nomeServico: '',
    nomePetSitter:'',
    sobrenome:'',
    preco:'',
    usuarioId:''
   
  }
  cliente: UsuarioDTO = {
    usuarioId: '',
    userName: '',
    nome: '',
    email: '',
    sobrenome: '',
    cpf: '',
    cnpj: '',
    telefone: '',
    cidade: '',
    estado: '',
    endereco: '',
    rua: '',
    numero:'',
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: ''
  }
  ngOnInit(): void {
    this.servicoId = this.route.snapshot.paramMap.get('id_servico')!
    this.petSitterId = this.route.snapshot.paramMap.get('id_petsitter')!
    this.userNameCliente = this.storage.decodePayLoadJWT().sub
    this.findPetSitterByUserName()
    this.findByPetSitterAndServico()
  }
  findPetSitterByUserName() {
    this.usuarioService.findByUserName(this.userNameCliente).subscribe((resposta => {
      this.cliente = resposta
    }))
  }
  findByPetSitterAndServico() {
    this.servicoPetSitterService.findByPetSitterAndServico(this.petSitterId, this.servicoId).subscribe((resposta => {
      this.sps = resposta
    }))
  }
  converteDatas(){
    this._dataFim  =  this.datePipe.transform(this._dataFimForm.value, 'yyyy-MM-dd') as string
    this._dataInicio  =  this.datePipe.transform(this._dataInicioForm.value, 'yyyy-MM-dd') as string
  }
  async calculaValor() {
    this.converteDatas()
    this.obj.dataInicio = this._dataInicio
    this.obj.dataFim = this._dataFim
    this.solicitacaoService.calculaPreco(this.cliente.usuarioId, this.servicoId, this.petSitterId, this.obj).subscribe(((resp) => {
      this.precoServico = resp
    }))
  }
  redirectToSolicitacaoCreate() {
    this.calculaValor()
    this.router.navigate([`solicitacao/${this.cliente.usuarioId}/servico/${this.servicoId}/preco/${this.precoServico}/datainicio/${this._dataInicio}/datafim/${this._dataFim}/petsitter/${this.petSitterId}/create`])
  }
}
