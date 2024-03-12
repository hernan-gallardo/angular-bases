import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { v4 as uuid } from "uuid";
@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  emmitCharacter(): void {
    console.log(this.character);

    if (this.character.name === '') return;

    this.onNewCharacter.emit(this.character);

    //this.character.name = '';
    //this.character.power= 0;
    this.character = { id: uuid(), name: '', power: 0 };

  };
}
