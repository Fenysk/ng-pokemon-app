import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonBorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
    {
        path: 'pokemon/edit/:id',
        component: EditPokemonComponent
    },
    {
        path: 'pokemon/:id',
        component: DetailsPokemonComponent
    },
    {
        path: 'pokemons',
        component: ListPokemonsComponent
    },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonRoutes),
        ListPokemonsComponent,
        DetailsPokemonComponent,
        PokemonFormComponent,
        PokemonBorderCardDirective,
        PokemonTypeColorPipe,
        FormsModule
    ],
    providers: [PokemonService]
})
export class PokemonModule { }
