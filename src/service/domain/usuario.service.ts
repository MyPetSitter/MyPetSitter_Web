import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioCadastroDTO } from './../../model/cadastrousuario.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { UsuarioDTO } from 'src/model/usuario.dto';
import { Usuario } from 'src/model/usuario';

@Injectable()

export class UsuarioService {
    
    constructor(private http: HttpClient, private _snack: MatSnackBar) {}

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/${id}`)
    }
    findByUserName(userName:String) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/user?value=${userName}`)
    }
    findAll() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/usuarios`)
    }
    insert(obj : UsuarioCadastroDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/usuarios`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }
    update(usuarioId:string, obj:Usuario) {
        return this.http.patch(`${API_CONFIG.baseUrl}/usuarios/${usuarioId}`, obj)
    }
    updateDto(usuarioId:string, obj:UsuarioDTO) {
        return this.http.patch(`${API_CONFIG.baseUrl}/usuarios/${usuarioId}`, obj)
    }
    delete(usuarioId:string) {
        return this.http.delete(`${API_CONFIG.baseUrl}/usuarios/${usuarioId}`)
    }
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}