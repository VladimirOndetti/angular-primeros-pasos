import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor( private dbzService: DbzService) {
  };

  get characterList(): Character[] {
    return [...this.dbzService.characterList]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  addCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
