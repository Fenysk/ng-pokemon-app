import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable()
export class PokemonService {

    constructor(private httpClient: HttpClient) { }

    getPokemonList(): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>(`api/pokemons`).pipe(
            tap((pokemonList) => this.log(pokemonList)),
            catchError((error) => this.handleError(error, [])));
    }

    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.httpClient.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, undefined)));
    }

    searchPokemon(term: string): Observable<Pokemon[]> {
        if (term.length < 3) return of([]);

        return this.httpClient.get<Pokemon[]>(`api/pokemons?name=${term}`).pipe(
            tap((pokemonList) => this.log(pokemonList)),
            catchError((error) => this.handleError(error, []))
        );
    }

    createPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.httpClient.post<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined)));
    }

    updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.httpClient.put<Pokemon>(`api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined)));
    }

    deletePokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.httpClient.delete<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
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
            'Dragon',
            'Steel',
        ];
    }

}
