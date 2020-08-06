import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPrimeNgModule } from './app.primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { BreweriesComponent } from './features/components/breweries/breweries.component';
import { PokemonCardsComponent } from './features/components/pokemon-cards/pokemon-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    PokemonCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
