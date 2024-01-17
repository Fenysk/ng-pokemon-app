import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: 'app.template.html',
    styles: [],
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
