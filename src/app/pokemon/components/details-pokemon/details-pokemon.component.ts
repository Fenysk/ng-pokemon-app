import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon';
import { POKEMONS } from '../data/mock-pokemon-list';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';

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
    ) { }

    ngOnInit() {
        this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id === this.pokemonId);
    }

}
