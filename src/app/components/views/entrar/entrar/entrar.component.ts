import { UsuarioDTO } from './../../../../../model/usuario.dto';
import { API_CONFIG } from './../../../../../config/api_config';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/service/domain/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  credenciais: CredenciaisDTO = {
    userName: '',
    senha: ''
  };
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
    bairro: '',
    cep: '',
    tipo: '',
    dataNascimento: ''
  }
  
  constructor(private loginService: LoginService, private router:Router, public usuarioService: UsuarioService) { }
  ngOnInit(): void {
 
  }
  entrar() {
    this.loginService.authenticate(this.credenciais).subscribe((response => {
      this.loginService.successfulLogin(response.headers.get('Authorization') as string)
      //this.router.navigate(['/dashboard'])
      this.verificarTipoUsuario()
    }), error => {
      this.loginService.mensagem(error.message)
      
    })
  }
  verificarTipoUsuario() {
    this.usuarioService.findByUserName(this.credenciais.userName).subscribe((resposta => {
      this.usuario = resposta
      if(this.usuario.tipo === "p") {
        var url = "http://" + window.location.host + `/dashboard`
        window.location.href = url
      } else {
        url = "http://" + window.location.host + `/cliente`
        window.location.href = url
      }
    }))   
  }
}
