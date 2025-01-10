import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Captain America', 'Thor', 'Hulk'];
  public lastHeroRemoved?: string = '';

  removeLastHero(): void {
    this.lastHeroRemoved = this.heroNames.pop();
  }

}
