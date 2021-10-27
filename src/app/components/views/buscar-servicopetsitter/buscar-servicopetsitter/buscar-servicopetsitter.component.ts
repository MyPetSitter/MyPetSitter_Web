import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicoPetSitterDTO3 } from 'src/model/servicopetsiter.dto3';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';

@Component({
  selector: 'app-buscar-servicopetsitter',
  templateUrl: './buscar-servicopetsitter.component.html',
  styleUrls: ['./buscar-servicopetsitter.component.css']
})
export class BuscarServicopetsitterComponent implements OnInit {
  servicos: ServicoPetSitterDTO3[]=[]
  servicoId:number=0
  cidade:string=''
  constructor(private servicoPetSitterService: ServicoPetSitterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicoId = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.cidade = this.route.snapshot.paramMap.get('city')!
    this.findByServicoAndCidade()
  }
  findByServicoAndCidade() {
    this.servicoPetSitterService.findByServicoAndCidade(this.servicoId, this.cidade).subscribe((resposta => {
      this.servicos = resposta
    }))
  }
}
