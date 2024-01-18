import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../pokemon.service';

@Component({
    imports: [RouterModule, DatePipe, PokemonTypeColorPipe],
    selector: 'app-details-pokemon',
    standalone: true,
    templateUrl: 'details-pokemon.component.html',
    styleUrl: 'details-pokemon.component.scss'
})
export class DetailsPokemonComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private readonly pokemonService: PokemonService
    ) { }

    pokemonList: Pokemon[] = this.pokemonService.getPokemonList();
    pokemonId: number | null = null;
    pokemon: Pokemon | undefined;

    ngOnInit() {
        this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id === this.pokemonId);
    }

}
