import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/data/mock-pokemon.data';

@Injectable()
export class InMemoryDatabaseService implements InMemoryDbService {

    createDb() {
        const pokemons = POKEMONS;
        return { pokemons };
    }

}
