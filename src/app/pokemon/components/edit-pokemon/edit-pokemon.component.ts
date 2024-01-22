import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../pokemon.service';
import { LoaderComponent } from '../loader/loader.component';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    imports: [PokemonFormComponent, LoaderComponent],
    selector: 'app-edit-pokemon',
    standalone: true,
    templateUrl: './edit-pokemon.component.html',
    styles: ``,
})
export class EditPokemonComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private readonly pokemonService: PokemonService
    ) { }

    pokemon: Pokemon | undefined;

    ngOnInit(): void {
        const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'));
        this.pokemonService.getPokemonById(pokemonId)
            .subscribe(pokemon => this.pokemon = pokemon)
    }

}
