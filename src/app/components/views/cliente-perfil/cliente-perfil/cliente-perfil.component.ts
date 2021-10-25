import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { Cidades } from 'src/model/cidades-model';
import { CepServiceService } from '../../home/cep-service.service';
import { CidadeService } from 'src/service/cidades.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {
  _dataInicioForm = new FormControl(moment())
  _dataFimForm = new FormControl(moment())
  _dataFim:string=''
  _dataInicio:string=''
  queryField = new FormControl()
  constructor(private service: CepServiceService, private datePipe: DatePipe, private cidadesService: CidadeService) { }

  ngOnInit(): void {
    this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value))
    ).subscribe()
  }
  teste() {
    this.converteDatas()
    console.log('DATA INICIO: ' + this._dataInicio)
   console.log('DATA FIM: ' + this._dataFim)

  }
  /*findByCep(): void {
    this.service.findByCep(this.cp.cep).subscribe((resposta) => {
      this.cp = resposta
      console.log(this.cp)
    })
  }
  }*/
  converteDatas(){
    this._dataFim  =  this.datePipe.transform(this._dataFimForm.value, 'yyyy-MM-dd') as string
    this._dataInicio  =  this.datePipe.transform(this._dataInicioForm.value, 'yyyy-MM-dd') as string
  }
}
