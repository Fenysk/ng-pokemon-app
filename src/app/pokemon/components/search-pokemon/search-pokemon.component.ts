import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'search-pokemon',
    standalone: true,
    imports: [AsyncPipe, RouterModule],
    templateUrl: './search-pokemon.template.html',
    styleUrl: 'search-pokemon.style.scss'
})
export class SearchPokemonComponent implements OnInit {

    private searchTerms = new Subject<string>();
    // Subject permet de stocker les recherches successives de l'utilisateur.
    // On stock (flux de données dans le temps) ces recherches dans un tableau de chaînes de caractères.
    // {..."a"............"ab"................"abc"............."abcd".............."abcde".............."abcdef"..............}

    pokemons$ = new Observable<Pokemon[]>;
    // On pilote l'observable pokemons$ avec le Subject searchTerms.
    // A partir des données dans le temps, on va afficher les résultats de la recherche.
    // {..."pkmnList(a)".."pkmnList(ab)"......."pkmnList(abc)".."pkmnList(abcd)"...."pkmnList(abcde)"...."pkmnList(abcdef)"....}

    constructor(private readonly pokemonService: PokemonService) { }

    ngOnInit(): void {

        this.pokemons$ = this.searchTerms
            .pipe(
                // {."l".."lu".."luc".."luca"....."lucat".."luca"....."lucar".."lucari".............}   7 requêtes
                debounceTime(300),
                // {..................."luca".............."luca".............."lucar"..............}  3 requêtes
                distinctUntilChanged(),
                // {..................."luca".................................."lucar"..............}  2 requêtes
                switchMap((term) => this.pokemonService.searchPokemon(term))
                // {..................."pkmnList(luca)"........................"pkmnList(lucar)"....}
            )

    }

    search(term: string) {
        this.searchTerms.next(term);
        console.log(term);
    }

}
