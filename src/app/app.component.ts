import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public perros<String>;

  constructor(){
    this.perros = ['Lazy','Puddle','Doberman'];
  }
}
