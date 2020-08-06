import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweriesComponent } from './features/components/breweries/breweries.component';
import { PokemonCardsComponent } from './features/components/pokemon-cards/pokemon-cards.component';

const routes: Routes = [
  {
    path: 'breweries',
    component: BreweriesComponent
  },
  {
    path: 'pokemon-cards',
    component: PokemonCardsComponent
  },
  {
    path: '',
    redirectTo: 'breweries',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
