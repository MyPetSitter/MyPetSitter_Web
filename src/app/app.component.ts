import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pet-sitter';
  router: string = '';

ngOnInit(): void {
  this.router = window.location.href.toString()
  console.log(this.router)
}

}
