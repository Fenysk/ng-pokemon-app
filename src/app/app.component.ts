import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './data/mock-pokemon-list';
import { Pokemon } from './interfaces/pokemon';
import { PokemonBorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.template.html',
    styles: [],
    imports: [CommonModule, RouterOutlet, PokemonBorderCardDirective, PokemonTypeColorPipe]
})
export class AppComponent implements OnInit {
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
