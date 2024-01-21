import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { PokemonBorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
    {
        path: 'pokemon/edit/:id',
        component: EditPokemonComponent
    },
    {
        path: 'pokemon/create',
        component: CreatePokemonComponent
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
        FormsModule,
        HttpClientModule
    ],
    providers: [PokemonService,]
})
export class PokemonModule { }
