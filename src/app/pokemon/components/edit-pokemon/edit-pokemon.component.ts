import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    templateUrl: './edit-pokemon.component.html',
    styles: ``,
    imports: [PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private readonly pokemonService: PokemonService
    ) { }

    pokemon: Pokemon | undefined;

    ngOnInit(): void {
        const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'));
        console.log(pokemonId);
        this.pokemon = this.pokemonService.getPokemonById(pokemonId);
        console.log(this.pokemon);
    }

}
