import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonBorderCardDirective } from '../../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../pokemon.service';

@Component({
    imports: [PokemonBorderCardDirective, PokemonTypeColorPipe, DatePipe, RouterModule],
    selector: 'app-list-pokemons',
    standalone: true,
    templateUrl: './list-pokemons.component.html',
    styles: ``
})
export class ListPokemonsComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) { }

    pokemonList: Pokemon[] = this.pokemonService.getPokemonList();
    pokemonSelected: Pokemon | undefined;

    ngOnInit() {
        console.table(this.pokemonList);
    }

    selectPokemon(pokemonId: number) {
        this.pokemonList = this.pokemonService.getPokemonList();
        const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === pokemonId)

        if (pokemon) {
            this.pokemonSelected = pokemon;
            this.pokemonList = [pokemon]
        } else {
            this.pokemonSelected = undefined;
        }
    }

}
