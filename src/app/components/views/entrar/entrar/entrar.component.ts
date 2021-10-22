import { API_CONFIG } from './../../../../../config/api_config';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

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
  constructor(private loginService: LoginService, private router:Router) { }
  ngOnInit(): void {
 
  }
  entrar() {
    this.loginService.authenticate(this.credenciais).subscribe((response => {
      this.loginService.successfulLogin(response.headers.get('Authorization') as string)
      //this.router.navigate(['/dashboard'])
      var url = "http://" + window.location.host + "/dashboard"
      window.location.href = url      
    }), error => {
      console.log(error)
    })
  }
}
