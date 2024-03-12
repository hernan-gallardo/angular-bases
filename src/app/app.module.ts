import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent,
    //HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
