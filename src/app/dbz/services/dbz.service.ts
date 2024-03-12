import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from './../interfaces/character.interface';

//console.log(uuid())

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  newCharacter(character: Character): void {
    //debugger;

    //const newCharacter: Character = {id: uuid(), ...character}
    const newCharacter: Character = {...character}

    console.log("Main Page");
    console.log(character);
    this.characters.push(newCharacter);
  }

  deleteCharacter(index: number): void {
    console.log(`indice: ${index}`);
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
