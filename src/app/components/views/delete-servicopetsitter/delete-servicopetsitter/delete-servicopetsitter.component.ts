import { ActivatedRoute, Router } from '@angular/router';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import { Component, OnInit } from '@angular/core';
import { ServicoPetSitterDTO } from 'src/model/servicopetsitterdto';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-servicopetsitter',
  templateUrl: './delete-servicopetsitter.component.html',
  styleUrls: ['./delete-servicopetsitter.component.css']
})
export class DeleteServicopetsitterComponent implements OnInit {
  servicoPetSitterId: String = ''
  sps: ServicoPetSitterDTO = {
    servicoPetSitterId: '',
    usuarioId: '',
    servicoId: '',
    descricao: '',
    nomeServico: '',
    preco: '',
   
  }
  constructor(private servicoPetSitterService: ServicoPetSitterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.servicoPetSitterId = this.route.snapshot.paramMap.get('id_servicoPetSitter')!
    this.findServicoPetSitterById()
  }
  findServicoPetSitterById() {
    this.servicoPetSitterService.findServicoPetSitterById(this.servicoPetSitterId as string).subscribe((resposta => {
      this.sps = resposta
    }))
  }
  delete() {
    this.servicoPetSitterService.delete(this.servicoPetSitterId).subscribe((resposta => {
      this.servicoPetSitterService.mensagem('Serviço removido com sucesso!')
      this.router.navigate(['/meusservicos'])
    }), err => {
      console.log(err)
    })
  }
  cancel() {
    this.router.navigate(['meusservicos'])
  }
}
