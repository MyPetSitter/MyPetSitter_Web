import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { UsuarioCadastroDTO } from './../../../../model/cadastrousuario.dto';
import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/model/usuario.dto';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  confirmarSenha = ''
  tipoUsuario = false
  usuario: UsuarioCadastroDTO = {
    userName: '',
    nome: '',
    email: '',
    sobrenome: '',
    cpf: '',
    cnpj:'',
    telefone: '',
    cidade:'',
    estado:'',
    rua:'',
    numero:'',
    bairro:'',
    cep:'',
    dataNascimento:'',
    dataCadastro:'',
    senha: '',
    tipo: ''
  }
  constructor(private usuarioService: UsuarioService, private router: Router) { }
  
  ngOnInit(): void {
  }
  onChange(e:any) {
    this.tipoUsuario = e.checked
  } 
  insert() {
    console.log(this.usuario)
    if(this.usuario.senha != this.confirmarSenha) {
      this.usuarioService.mensagem('Senhas não coincidem!')
    } else {
      this.verificaTipoUsuario()
      this.usuarioService.insert(this.usuario).subscribe((resposta => {
        this.usuarioService.mensagem('Conta criada com sucesso!')
        this.router.navigate([''])
      }), err => {
        console.log(err)
        this.usuarioService.mensagem(err.message)
        for(let i = 0; i < err.errors.length; i++) {
          this.usuarioService.mensagem(err.errors[i].message)
        }
      })
    }

  }
  verificaTipoUsuario() {
    if(this.tipoUsuario) {
      this.usuario.tipo = "p"
    } else {
      this.usuario.tipo = "c"
    }
  }
}
