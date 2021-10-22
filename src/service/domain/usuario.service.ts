import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { UsuarioDTO } from 'src/model/usuario.dto';

@Injectable()

export class UsuarioService {
    
    constructor(private http: HttpClient) {}

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/${id}`)
    }
    findByUserName(userName:string) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/user?value=${userName}`)
    }
}