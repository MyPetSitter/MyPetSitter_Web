import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/service/storage.service';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/model/usuario.dto';

@Component({
  selector: 'app-navcl',
  templateUrl: './navcl.component.html',
  styleUrls: ['./navcl.component.css']
})
export class NavclComponent implements OnInit {
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
    numero:'',
    endereco: '',
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: ''
  }
  constructor(private usuarioService: UsuarioService, private storage: StorageService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuario.userName = this.storage.decodePayLoadJWT().sub
  }
  findUsuarioByUserName() {
    this.usuarioService.findByUserName(this.usuario.userName).subscribe((resposta => {
      this.usuario = resposta
      this.router.navigate([`/meusdados/${this.usuario.usuarioId}`])
    }))
  }
  sair() {
    this.loginService.logout()
    var url = "http://" + window.location.host
    window.location.href = url
  }
  
}
