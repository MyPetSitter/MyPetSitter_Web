import { StorageService } from 'src/service/storage.service';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { UsuarioDTO } from 'src/model/usuario.dto';

@Component({
  selector: 'app-dados-petsitter',
  templateUrl: './dados-petsitter.component.html',
  styleUrls: ['./dados-petsitter.component.css']
})
export class DadosPetsitterComponent implements OnInit {
  userName:string=''
  usuarioId:string=''
  usuario: UsuarioDTO = {
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
    endereco:'',
    numero:'',
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: '',  
  }
  constructor(private usuarioService: UsuarioService, private storage: StorageService) { }

  ngOnInit(): void {
    this.userName = this.storage.decodePayLoadJWT().sub
    console.log(this.userName)
    this.findByUserName()
    this.usuarioId = this.usuario.usuarioId as any
    console.log(this.usuarioId)
  }
  findByUserName() {
    this.usuarioService.findByUserName(this.userName).subscribe((resposta => {
      this.usuario = resposta
      this.usuarioId = this.usuario.usuarioId as any
    }))
  }
  update() {
  this.usuarioService.updateDto(this.usuarioId, this.usuario).subscribe((resposta => {
    this.usuarioService.mensagem('Dados atualizados com sucesso!')
  }), err => {
    console.log(err)
  })
  }
}
