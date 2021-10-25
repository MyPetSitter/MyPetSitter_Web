import { Cidades } from './../model/cidades-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CidadeService {
    url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/pr/municipios'
    constructor(private http: HttpClient){}


    findCidades() : Observable<Cidades[]> {
        return this.http.get<Cidades[]>(`${this.url}`)
    }
}