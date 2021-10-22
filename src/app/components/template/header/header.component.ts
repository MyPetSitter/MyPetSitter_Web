import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: string = ''
  constructor() { }

  ngOnInit(): void {
    
  }
  login() {
    window.location.href = 'http://localhost:4200/entrar'
  }
}
