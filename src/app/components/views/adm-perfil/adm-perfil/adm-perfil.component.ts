import { ServicoService } from 'src/service/domain/servico.service';
import { AdministradorService } from 'src/service/domain/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/model/administrador';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adm-perfil',
  templateUrl: './adm-perfil.component.html',
  styleUrls: ['./adm-perfil.component.css']
})
export class AdmPerfilComponent implements OnInit {
  adm: Administrador = {
    administradorId:'',
    nome:'',
    sobrenome:'',
    userName:'',
    senha:''
  }
  constructor(private admService: AdministradorService, private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.adm.administradorId = localStorage.getItem('admId') as String
    this.findAdmById()
  }
  findAdmById() {
    this.admService.findById(this.adm.administradorId).subscribe((resposta => {
      this.adm = resposta
      console.log(this.adm)
    }), error => {
      console.log(error)
    })
  }
  findServicos() {
    
  }
}
