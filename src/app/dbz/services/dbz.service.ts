import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid);

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characterList: Character[] = [
    {
      id: uuid(),
      name: "Krilling",
      power: 5000,
    },
    {
      id: uuid(),
      name: "Goku",
      power: 10000,
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 9999,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    }
    this.characterList.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characterList.splice(index, 1);
  }

  onDeleteCharacterById(id: string): void {
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

  constructor() { }
}
