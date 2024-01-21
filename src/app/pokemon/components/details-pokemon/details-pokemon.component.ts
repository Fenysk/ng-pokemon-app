import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
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
        private router: Router,
        private readonly pokemonService: PokemonService,
    ) { }

    pokemonList: Pokemon[];
    pokemonId: number | null = null;
    pokemon: Pokemon | undefined;

    ngOnInit() {
        this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));

        this.pokemonService.getPokemonById(this.pokemonId)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    deletePokemon(pokemon: Pokemon) {
        const isConfirmed = confirm(`Are you sure you want to delete ${pokemon.name}?`);

        if (!isConfirmed) return;

        this.pokemonService.deletePokemonById(pokemon.id)
            .subscribe(() => this.router.navigate(['/pokemons']));
    }

}
