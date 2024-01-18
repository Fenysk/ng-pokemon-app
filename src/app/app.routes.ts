import { Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'pokemons',
        component: ListPokemonsComponent
    },
    {
        path: 'pokemon/:id',
        component: DetailsPokemonComponent
    },

    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
