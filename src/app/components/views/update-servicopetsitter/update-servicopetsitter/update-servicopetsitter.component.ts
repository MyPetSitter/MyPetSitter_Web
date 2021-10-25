import { Router, ActivatedRoute } from '@angular/router';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import { Component, OnInit } from '@angular/core';
import { ServicoPetSitterDTO } from 'src/model/servicopetsitterdto';
import { ServicoPetSitterDTO2 } from 'src/model/servicopetsitter.dto2';

@Component({
  selector: 'app-update-servicopetsitter',
  templateUrl: './update-servicopetsitter.component.html',
  styleUrls: ['./update-servicopetsitter.component.css']
})
export class UpdateServicopetsitterComponent implements OnInit {
  sps: ServicoPetSitterDTO = {
    servicoPetSitterId: '',
    usuarioId: '',
    servicoId: '',
    descricao: '',
    nomeServico: '',
    preco: '',
   
  }
  constructor(private servicoPetSitterService: ServicoPetSitterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sps.usuarioId = this.route.snapshot.paramMap.get('id')!
    this.sps.servicoPetSitterId = this.route.snapshot.paramMap.get('id_servicoPetSitter')!
    this.findServicoPetSitterById()
  }
  findServicoPetSitterById() {
    this.servicoPetSitterService.findServicoPetSitterById(this.sps.servicoPetSitterId).subscribe((resposta => {
      this.sps = resposta
    }))
  }
  update() {
    this.servicoPetSitterService.update(this.sps).subscribe((resposta => {
      //this.servicoPetSitterService.successfulLogin(resposta.headers.get('Authorization') as string)
      this.servicoPetSitterService.mensagem('Serviço atualizado com sucesso!')
      this.router.navigate([`servicopetsitter/${this.sps.usuarioId}`])
    }), error => {
      console.log(error)
    })
  }
}
