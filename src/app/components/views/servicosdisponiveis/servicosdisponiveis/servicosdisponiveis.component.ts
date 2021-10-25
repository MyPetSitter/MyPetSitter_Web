import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/model/servico';
import { ServicoService } from 'src/service/domain/servico.service';

@Component({
  selector: 'app-servicosdisponiveis',
  templateUrl: './servicosdisponiveis.component.html',
  styleUrls: ['./servicosdisponiveis.component.css']
})
export class ServicosdisponiveisComponent implements OnInit {
  servicos: Servico[] = []
  servico: Servico = {
    servicoId: '',
    nome: '',
    descricao: ''
  }
  usuarioId: String = ''
  servicoId: String = ''
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes']
  constructor(private service: ServicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id')!
    this.findAll()
  }
  findAll() {
    this.service.findAll().subscribe((resposta => {
      this.servicos = resposta
    }))
  }
  selectRow(row:any) {
    this.servico = row
    this.router.navigate([`/servicosdisponiveis/${this.usuarioId}/servicos/${this.servico.servicoId}/incluir`])
  }
}
