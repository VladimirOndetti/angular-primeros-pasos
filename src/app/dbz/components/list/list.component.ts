import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  public title: string = 'Listado de personajes'

  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public heroList: Character[] = [];

  onDelete(id?: string): void {
    if(!id) return;

    this.onDeleteCharacterEvent.emit(id);
  }
}
