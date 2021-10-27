import { Router } from '@angular/router';
import { ServicoPetSitterDTO3 } from './../../../../../model/servicopetsiter.dto3';
import { ServicoPetSitterDTO } from 'src/model/servicopetsitterdto';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import { Servico } from 'src/model/servico';
import { ServicoService } from 'src/service/domain/servico.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { Cidades } from 'src/model/cidades-model';
import { CepServiceService } from '../../home/cep-service.service';
import { CidadeService } from 'src/service/cidades.service';
@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  cidade:string = ''
  selectedValue:number=0
  servicoId:number=0
  servicos: Servico[]=[]
  _dataInicioForm = new FormControl(moment())
  _dataFimForm = new FormControl(moment())
  _dataFim:string=''
  _dataInicio:string=''
  queryField = new FormControl()
  constructor(private service: CepServiceService, private datePipe: DatePipe, private cidadesService: CidadeService, private servicoService: ServicoService, private router: Router) { }

  ngOnInit(): void {
    this.findAllServicos()
    this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value))
    ).subscribe()
    
  }
  redirectToBusca() {
    //this.converteDatas()
    this.router.navigate([`/servicos/${this.selectedValue}/cidade/${this.cidade}/busca`])

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
  findAllServicos() {
    this.servicoService.findAll().subscribe((resposta => {
      this.servicos = resposta
    }))
  }

}
