import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {

    constructor(private httpClient: HttpClient) { }

    baseUrl = 'http://localhost:3621';

    getPokemonList(): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>(`${this.baseUrl}/pokemons`).pipe(
            tap((pokemonList) => this.log(pokemonList)),
            catchError((error) => this.handleError(error, [])));
    }

    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.httpClient.get<Pokemon>(`${this.baseUrl}/pokemons/${pokemonId}`).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, undefined)));
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.httpClient.put<Pokemon>(`${this.baseUrl}/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, undefined)));
    }

    deletePokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.httpClient.delete<Pokemon>(`${this.baseUrl}/pokemons/${pokemonId}`).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, undefined)));
    }

    private log(response: Pokemon[] | Pokemon | undefined) {
        console.table(response);
    }

    private handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue);
    }

    getPokemonTypeList(): string[] {
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
