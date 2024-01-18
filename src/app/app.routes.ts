import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },   
    
    { path: '', loadChildren: () => PokemonModule },

    { path: '**', component: PageNotFoundComponent }
];
