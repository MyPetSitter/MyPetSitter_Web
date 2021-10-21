import { API_CONFIG } from './../config/api_config';
import { Component } from '@angular/core';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pet-sitter';
  router: string = '';
  isLogged = false;
  localStorage = localStorage.getItem('localUser')
constructor(private loginService: LoginService){}

ngOnInit(): void {
  this.router = window.location.href.toString()
  if(this.router == `${API_CONFIG.baseUrl}/dashboard`) {
    this.isLogged = true
  }
}

}
