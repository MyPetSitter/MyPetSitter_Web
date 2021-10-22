import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petsitter-perfil',
  templateUrl: './petsitter-perfil.component.html',
  styleUrls: ['./petsitter-perfil.component.css']
})
export class PetsitterPerfilComponent implements OnInit {
  tok = localStorage.getItem('localUser')
  constructor() {}
 
  ngOnInit(): void {
    console.log(this.tok)
  }

}
