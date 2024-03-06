import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  changeHero(value: string): void {
    this.name = value;
  }
  changeAge(value: number): void {
    this.age = value;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;

    /* Lo siguiente está fuera del ciclo de detección de Angular:*/
      //document.querySelector('h1')!.innerHTML = '<h1>DesdeAngular</h1>';
      /*document.querySelectorAll('h1')!.forEach( element => {
        element.innerHTML = '<h1>DesdeAngular</h1>';
      });*/
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

}
