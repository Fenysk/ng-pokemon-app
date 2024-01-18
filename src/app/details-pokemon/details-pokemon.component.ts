import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
    imports: [RouterModule, DatePipe, PokemonTypeColorPipe],
    selector: 'app-details-pokemon',
    standalone: true,
    templateUrl: 'details-pokemon.component.html',
    styleUrl: 'details-pokemon.component.scss'
})
export class DetailsPokemonComponent implements OnInit {

    pokemonList: Pokemon[] = POKEMONS;
    pokemonId: number | null = null;
    pokemon: Pokemon | undefined;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id === this.pokemonId);
    }

}
