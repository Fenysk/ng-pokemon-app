import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';
import { POKEMONS } from './data/mock-pokemon-list';

@Injectable()
export class PokemonService {

    getPokemonList(): Pokemon[] {
        return POKEMONS;
    }

    getPokemonById(pokemonId: number): Pokemon | undefined {
        return POKEMONS.find(pokemon => pokemon.id === pokemonId);
    }

    getPokemonTypeList(): any[] {
        return [
            'Grass',
            'Fire',
            'Water',
            'Electric',
            'Poison',
            'Bug',
            'Flying',
            'Normal',
            'Fairy',
            'Ground',
            'Fighting',
            'Psychic',
            'Rock',
            'Ghost',
            'Ice',
            'Dragon'
        ];
    }

}
