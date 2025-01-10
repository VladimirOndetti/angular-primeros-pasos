import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 45;
  public ageChenged: boolean = false;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 20
    this.ageChenged = true;
  }

  reset(): void {
    this.name = "Ironman";
    this.age = 45
    this.ageChenged = false;
  }
}
