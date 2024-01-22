import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonBorderCardDirective } from '../../directives/border-card.directive';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { PokemonService } from '../../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
    imports: [PokemonBorderCardDirective, PokemonTypeColorPipe, DatePipe, RouterModule, SearchPokemonComponent],
    selector: 'app-list-pokemons',
    standalone: true,
    templateUrl: './list-pokemons.component.html',
    styles: ``
})
export class ListPokemonsComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) { }

    pokemonList: Pokemon[];

    ngOnInit() {
        this.pokemonService.getPokemonList()
            .subscribe(pokemonList => this.pokemonList = pokemonList);
    }

}
