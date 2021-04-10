import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allNumbers: number[] = [];
  
  onNumberAdded(number: number) {
    this.allNumbers.push(number);
  }
}
