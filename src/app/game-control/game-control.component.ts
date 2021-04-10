import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eachNumber = new EventEmitter<number>();
  numbers;
  i: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStartInterval() {
    this.numbers = setInterval(() => {    
      this.eachNumber.emit(this.i);
      this.i++;
    }, 1000); 
  }

  onStopInterval() {
    clearInterval(this.numbers);
  }
}
