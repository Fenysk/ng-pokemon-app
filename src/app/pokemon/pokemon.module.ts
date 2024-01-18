import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonBorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
    {
        path: 'pokemons',
        component: ListPokemonsComponent
    },
    {
        path: 'pokemon/:id',
        component: DetailsPokemonComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonRoutes),
        ListPokemonsComponent,
        DetailsPokemonComponent,
        PokemonBorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonService]
})
export class PokemonModule { }
