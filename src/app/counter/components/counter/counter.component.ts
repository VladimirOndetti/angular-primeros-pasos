import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+</button>
    <button (click)="increaseBy(-1)">-</button>
    <button (click)="resetCounter()">Reset</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 0;
  }
}
