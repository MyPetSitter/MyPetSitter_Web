import { CredenciaisAdm } from './../../../../../model/credenciais-adm.dto';
import { AdministradorService } from 'src/service/domain/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/model/administrador';

@Component({
  selector: 'app-entrar-adm',
  templateUrl: './entrar-adm.component.html',
  styleUrls: ['./entrar-adm.component.css']
})
export class EntrarAdmComponent implements OnInit {
  adm: CredenciaisAdm = {
    userName: '',
    senha: ''
  }
  administrador: Administrador = {
    administradorId: '',
    nome: '',
    sobrenome: '',
    userName: '',
    senha: ''
  }
  constructor(private admService: AdministradorService) { }

  ngOnInit(): void {
  }
  entrar() {
    this.admService.entrar(this.adm).subscribe((resposta => {
      if(resposta === "" || resposta === null) {
        console.log('non')
      } else {
        this.findByUserName()
        this.redirectToPerfilAdm()
      }
    }), error => {
      console.log(error)
    })
  }
  findByUserName() {
    this.admService.findByUserName(this.adm.userName).subscribe((resposta => {
      this.administrador = resposta
      window.localStorage.setItem('admId', JSON.stringify(this.administrador.administradorId))
      console.log(this.administrador)
    }))
  }
  redirectToPerfilAdm() {
    var url = "http://" + window.location.host + `/administrador`
    window.location.href = url
  }
}
/*this.admService.findByUserName(this.adm.userName).subscribe((resposta => {
  this.administrador = resposta
  console.log(this.administrador)
}))*/
