import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from "../components/pokemon-form/pokemon-form.component";
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: 'app-create-pokemon',
    standalone: true,
    templateUrl: `./create-pokemon.component.html`,
    styles: ``,
    imports: [PokemonFormComponent]
})
export class CreatePokemonComponent implements OnInit {

    pokemon: Pokemon;

    ngOnInit() {
        this.pokemon = new Pokemon();
    }
}
