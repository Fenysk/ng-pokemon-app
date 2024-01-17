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

    ngOnInit() {
        console.table(this.pokemonList);
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}.`);
    }

}
