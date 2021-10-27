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
  servicoPetSitterId: String = ''
  usuarioId: String = ''
  sps: ServicoPetSitterDTO = {
    servicoPetSitterId: '',
    petSitterId: '',
    servicoId: '',
    descricao: '',
    nomeServico: '',
    preco: '',
   
  }
  constructor(private servicoPetSitterService: ServicoPetSitterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id')!
    this.servicoPetSitterId = this.route.snapshot.paramMap.get('id_servicoPetSitter')!
    this.findServicoPetSitterById()
  }
  findServicoPetSitterById() {
    this.servicoPetSitterService.findServicoPetSitterById(this.servicoPetSitterId as string).subscribe((resposta => {
      this.sps = resposta
    }))
  }
  update() {
   
    this.servicoPetSitterService.update(this.servicoPetSitterId,this.sps).subscribe((resposta => {
      this.sps = resposta
      this.servicoPetSitterService.mensagem('Serviço atualizado com sucesso!')
      this.router.navigate([`/meusservicos`])
    }), error => {
      console.log(error)
    })
  }
  cancel() {
    this.router.navigate(['meusservicos'])
  }
}
