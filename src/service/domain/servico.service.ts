import { MatSnackBar } from '@angular/material/snack-bar';
import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Servico } from 'src/model/servico';

@Injectable()

export class ServicoService {

    constructor(private http: HttpClient, private _snack: MatSnackBar){}

    ngOnInit(): void {
        
    }
    findAll() : Observable<Servico[]> {
        return this.http.get<Servico[]>(`${API_CONFIG.baseUrl}/servicos`)
    }
    findById(usuarioId:String) : Observable<Servico> {
        return this.http.get<Servico>(`${API_CONFIG.baseUrl}/servicos/${usuarioId}`)
    }
    findServicoByNome(nome:String) : Observable<number> {
        return this.http.get<number>(`${API_CONFIG.baseUrl}/servicos?s=${nome}`)
    }
    create(obj: Servico) {
        return this.http.post(`${API_CONFIG.baseUrl}/servicos`, obj)
    }
    update(servicoId:string, obj:Servico) : Observable<Servico> {
        return this.http.put<Servico>(`${API_CONFIG.baseUrl}/servicos/${servicoId}`, obj)
    }
    delete(servicoId:string) {
        return this.http.delete(`${API_CONFIG.baseUrl}/servicos/${servicoId}`)
    }
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}