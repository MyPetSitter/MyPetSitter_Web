import { Administrador } from 'src/model/administrador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navadm',
  templateUrl: './navadm.component.html',
  styleUrls: ['./navadm.component.css']
})
export class NavadmComponent implements OnInit {
  adm: Administrador = {
    administradorId: '',
    userName: '',
    nome: '',
    sobrenome: '',
    senha: ''
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  sair() {
    var url = "http://" + window.location.host
    window.location.href = url
  }
}
