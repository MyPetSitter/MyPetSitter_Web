import { API_CONFIG } from './../../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Servico } from 'src/model/servico';

@Injectable()

export class ServicoService {

    constructor(private http: HttpClient){}

    ngOnInit(): void {
        
    }
    findAll() : Observable<Servico[]> {
        return this.http.get<Servico[]>(`${API_CONFIG.baseUrl}/servicos`)
    }
    findById(usuarioId:String) : Observable<Servico> {
        return this.http.get<Servico>(`${API_CONFIG.baseUrl}/servicos/${usuarioId}`)
    }

}