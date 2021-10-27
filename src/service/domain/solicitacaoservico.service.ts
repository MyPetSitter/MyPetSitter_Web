import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SolicitacaoServico } from './../../model/solicitacaoservico';
import { API_CONFIG } from 'src/config/api_config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class SolicitacaoServicoService {

    constructor(private http: HttpClient, private _snack: MatSnackBar){}

    create(clienteId:string, servicoId:string, petSitterId:string, obj:SolicitacaoServico) : Observable<SolicitacaoServico> {
        return this.http.post<SolicitacaoServico>(`${API_CONFIG.baseUrl}/solicitacaoservico?cliente=${clienteId}&servico=${servicoId}&petsitter=${petSitterId}`, obj)
    }
    calculaPreco(clienteId:String, servicoId:string, petSitterId:string, obj:SolicitacaoServico ) : Observable<number> {
       return this.http.post<number>(`${API_CONFIG.baseUrl}/solicitacaoservico/calculavalor?cliente=${clienteId}&servico=${servicoId}&petsitter=${petSitterId}`, obj) 
    }
    mensagem(str:string) {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}