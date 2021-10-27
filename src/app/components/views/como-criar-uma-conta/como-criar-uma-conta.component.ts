import { UsuarioService } from 'src/service/domain/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-criar-uma-conta',
  templateUrl: './como-criar-uma-conta.component.html',
  styleUrls: ['./como-criar-uma-conta.component.css']
})
export class ComoCriarUmaContaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  create() {
    this.usuarioService
  }

}
