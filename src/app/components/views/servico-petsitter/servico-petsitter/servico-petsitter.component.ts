import { Router } from '@angular/router';
import { UsuarioService } from './../../../../../service/domain/usuario.service';
import { ServicoPetSitterDTO } from 'src/model/servicopetsitterdto';
import { StorageService } from './../../../../../service/storage.service';
import { UsuarioDTO } from './../../../../../model/usuario.dto';
import { Component, OnInit } from '@angular/core';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';

@Component({
  selector: 'app-servico-petsitter',
  templateUrl: './servico-petsitter.component.html',
  styleUrls: ['./servico-petsitter.component.css']
})
export class ServicoPetsitterComponent implements OnInit {
  usuarioId: String =''
  servicos: ServicoPetSitterDTO[] =[]
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes']
  usuarioDto: UsuarioDTO= {
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
    rua: '',
    numero:'',
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: ''
  }
  constructor(private storage: StorageService, private servicoPetSitterService: ServicoPetSitterService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioDto.userName= this.storage.decodePayLoadJWT().sub
    this.findByUserName()
  }
  findByUserName() {
    this.usuarioService.findByUserName(this.usuarioDto.userName).subscribe((resposta => {
      this.usuarioDto = resposta
      this.usuarioId = this.usuarioDto.usuarioId
      this.findByPetSitter()
    }))
  }
  findByPetSitter() {
    this.servicoPetSitterService.findByPetSitter(this.usuarioId).subscribe((resposta => {
      this.servicos = resposta
    }), err => {
      console.log(err)
    })
  }
  redirectToServicosDisponiveis() {
    this.router.navigate([`servicosdisponiveis/${this.usuarioId}`])
  }
}
