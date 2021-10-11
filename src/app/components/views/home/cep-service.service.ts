import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from './cep-model';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private http: HttpClient) { }

  findByCep(cep:String) : Observable<Cep> {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    return this.http.get<Cep>(url)
  }
}
