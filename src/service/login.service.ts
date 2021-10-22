import { JwtHelper } from 'angular2-jwt';
import { StorageService } from './storage.service';
import { LocalUser } from './../model/local_user';
import { API_CONFIG } from '../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from 'src/model/credenciais.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwtHelper : JwtHelper = new JwtHelper();

  constructor(private http:HttpClient, public storage: StorageService) { }

  authenticate(credenciais:CredenciaisDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`, 
      credenciais,
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }
  successfulLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7)
    let user : LocalUser = {
        token : tok,
        userName: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user)
  }
  isLogged() {
    return this.storage.getLocalUser()
  }
  logout() {
    this.storage.setLocalUser(null as any)
  }
}