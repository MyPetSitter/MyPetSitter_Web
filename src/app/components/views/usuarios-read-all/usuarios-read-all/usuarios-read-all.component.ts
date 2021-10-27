import { UsuarioService } from 'src/service/domain/usuario.service';
import { Usuario } from './../../../../../model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-read-all',
  templateUrl: './usuarios-read-all.component.html',
  styleUrls: ['./usuarios-read-all.component.css']
})
export class UsuariosReadAllComponent implements OnInit {
  usuarios:Usuario[]=[]
  displayedColumns: string[] = ['usuarioId', 'userName', 'nome',  'sobrenome', 'tipo']
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.findAllUsers()
  }
  findAllUsers() {
    this.userService.findAll().subscribe((resposta => {
      this.usuarios = resposta
    }))
  }
}
