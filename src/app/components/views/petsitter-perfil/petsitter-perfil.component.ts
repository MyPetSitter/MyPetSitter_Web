import { ServicoPetSitterService } from './../../../../service/domain/servicopetsitter.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/model/usuario.dto';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { StorageService } from 'src/service/storage.service';

@Component({
  selector: 'app-petsitter-perfil',
  templateUrl: './petsitter-perfil.component.html',
  styleUrls: ['./petsitter-perfil.component.css']
})
export class PetsitterPerfilComponent implements OnInit {
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
    endereco: '',
    rua: '',
    numero:'',
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: ''
  }
  constructor(private usuarioService: UsuarioService, private storage:StorageService, private servicoPetSitterService: ServicoPetSitterService) {}
 
  ngOnInit(): void {
    this.usuario.userName= this.storage.decodePayLoadJWT().sub
    this.findByUserName()
  }
  findByUserName() {
    this.usuarioService.findByUserName(this.usuario.userName).subscribe((resposta => {
      this.usuario = resposta
      console.log(this.usuario)
    }))
  }

}
