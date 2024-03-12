import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 5000
  }];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  /*onDeleteCharacter(index: number): void {
    //TODO: Emitir el id del personaje
    console.log(index);
    this.onDelete.emit(index);
  };*/

  onDeleteCharacter(id: string): void {
    //TODO: Emitir el id del personaje
    console.log(id);
    this.onDelete.emit(id);
  };

}
