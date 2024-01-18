import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { POKEMONS } from '../data/mock-pokemon-list';
import { PokemonBorderCardDirective } from '../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    imports: [PokemonBorderCardDirective, PokemonTypeColorPipe, DatePipe, RouterModule],
    selector: 'app-list-pokemons',
    standalone: true,
    templateUrl: './list-pokemons.component.html',
    styles: ``
})
export class ListPokemonsComponent implements OnInit {
    pokemonList: Pokemon[] = POKEMONS;
    pokemonSelected: Pokemon | undefined;

    ngOnInit() {
        console.table(this.pokemonList);
    }

    selectPokemon(pokemonId: number) {
        this.pokemonList = POKEMONS;
        const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === pokemonId)

        if (pokemon) {
            this.pokemonSelected = pokemon;
            this.pokemonList = [pokemon]
        } else {
            this.pokemonSelected = undefined;
        }
    }

}
