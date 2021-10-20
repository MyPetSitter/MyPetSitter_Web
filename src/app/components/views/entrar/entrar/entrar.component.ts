import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { LoginService } from 'src/service/login.service';

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
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
 
  }
  entrar() {
    this.loginService.authenticate(this.credenciais).subscribe((response => {
      this.loginService.successfulLogin(response.headers.get('Authorization') as string)
    }), error => {
      
    })
  }
}
