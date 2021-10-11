import { Component, OnInit } from '@angular/core';
import { Cep } from './cep-model';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cp: Cep = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }
  constructor(private service: CepServiceService) { }

  ngOnInit(): void {
  }
  findByCep(): void {
    this.service.findByCep(this.cp.cep).subscribe((resposta) => {
      this.cp = resposta
      console.log(this.cp)
    })
  }
}
