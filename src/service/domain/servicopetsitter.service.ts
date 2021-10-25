import { StorageService } from 'src/service/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { API_CONFIG } from './../../config/api_config';
import { ServicoPetSitterDTO } from '../../model/servicopetsitterdto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ServicoPetSitter } from 'src/model/servicopetsitter';
import { ServicoPetSitterDTO2 } from 'src/model/servicopetsitter.dto2';
import { LocalUser } from 'src/model/local_user';
import { JwtHelper } from 'angular2-jwt';

@Injectable()

export class ServicoPetSitterService {
    jwtHelper : JwtHelper = new JwtHelper();
    constructor(private http: HttpClient, private _snack: MatSnackBar, private storage: StorageService) {}

    findByPetSitter(usuarioId:String) : Observable<ServicoPetSitterDTO[]> {
        return this.http.get<ServicoPetSitterDTO[]>(`${API_CONFIG.baseUrl}/servicopetsitter/user/${usuarioId}`)
    }
    findServicoPetSitterById(id:String) : Observable<ServicoPetSitterDTO> {
        return this.http.get<ServicoPetSitterDTO>(`${API_CONFIG.baseUrl}/servicopetsitter/${id}`)
    } 
    create(obj: ServicoPetSitterDTO) : Observable<ServicoPetSitterDTO> {
        return this.http.post<ServicoPetSitterDTO>(`${API_CONFIG.baseUrl}/servicopetsitter?petsitter=${obj.usuarioId}&servico=${obj.servicoId}`, obj)
    }
    delete(id:String) {
        return this.http.delete(`${API_CONFIG.baseUrl}/${id}`)
    }
    update(obj: ServicoPetSitterDTO) : Observable<ServicoPetSitterDTO> {
        return this.http.patch<ServicoPetSitterDTO>(`${API_CONFIG.baseUrl}/${obj.servicoPetSitterId}`, obj)
    }
    
    successfulLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7)
        console.log('TOKEN' + tok)
        let user : LocalUser = {
            token : tok,
            userName: this.jwtHelper.decodeToken(tok).sub,
            tipo: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user)
    }
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
    findByPetSitterAndServico(obj:ServicoPetSitter) : Observable<ServicoPetSitter> {
        return this.http.get<ServicoPetSitter>(`${API_CONFIG.baseUrl}/servicopetsitter/${obj.usuarioId}?servico=${obj.servicoId}`)
    }
}