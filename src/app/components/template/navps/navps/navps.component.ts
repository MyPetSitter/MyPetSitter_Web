import { LoginService } from 'src/service/login.service';
import { StorageService } from 'src/service/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navps',
  templateUrl: './navps.component.html',
  styleUrls: ['./navps.component.css']
})
export class NavpsComponent implements OnInit {
  
  constructor(private storage: StorageService, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  sair() {
    this.loginService.logout()
    var url = "http://" + window.location.host
    window.location.href = url
  }
}
