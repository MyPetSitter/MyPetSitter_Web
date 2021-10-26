import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioCadastroDTO } from './../../model/cadastrousuario.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { UsuarioDTO } from 'src/model/usuario.dto';

@Injectable()

export class UsuarioService {
    
    constructor(private http: HttpClient, private _snack: MatSnackBar) {}

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/${id}`)
    }
    findByUserName(userName:String) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/user?value=${userName}`)
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
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}