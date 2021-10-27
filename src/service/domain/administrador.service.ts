import { MatSnackBar } from '@angular/material/snack-bar';
import { Administrador } from './../../model/administrador';
import { Observable } from 'rxjs';
import { CredenciaisAdm } from './../../model/credenciais-adm.dto';
import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()

export class AdministradorService {

    constructor(private http: HttpClient, private _snack: MatSnackBar){}

    entrar(obj: CredenciaisAdm) {
        return this.http.post(`${API_CONFIG.baseUrl}/administradores/auth`, obj, {responseType: 'text'})
    }
    findByUserName(userName:String) : Observable<Administrador> {
        return this.http.get<Administrador>(`${API_CONFIG.baseUrl}/administradores/user?value=${userName}`)
    }
    findById(admId:String) : Observable<Administrador> {
        return this.http.get<Administrador>(`${API_CONFIG.baseUrl}/administradores/${admId}`)
    }
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}