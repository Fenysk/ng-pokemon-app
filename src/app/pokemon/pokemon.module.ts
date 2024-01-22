import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthGuard } from '../auth/auth.guard';
import { InMemoryDatabaseService } from '../in-memory-database.service';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonBorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
    {
        path: 'pokemon/edit/:id',
        canActivate: [AuthGuard],
        component: EditPokemonComponent,
    },
    {
        path: 'pokemon/create',
        canActivate: [AuthGuard],
        component: CreatePokemonComponent,
        title: 'Create Pokemon',
    },
    {
        path: 'pokemon/:id',
        component: DetailsPokemonComponent,
    },
    {
        path: 'pokemons',
        component: ListPokemonsComponent,
        title: 'Pokédex',
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
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService, { dataEncapsulation: false }),
    ],
    providers: [PokemonService, InMemoryDatabaseService]
})
export class PokemonModule { }
