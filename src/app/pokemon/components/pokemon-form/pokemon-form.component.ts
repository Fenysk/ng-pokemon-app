import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'pokemon-form',
    standalone: true,
    imports: [FormsModule, PokemonTypeColorPipe],
    templateUrl: './pokemon-form.component.html',
    styleUrl: './pokemon-form.style.scss'
})
export class PokemonFormComponent implements OnInit {

    constructor(
        private router: Router,
        private readonly pokemonService: PokemonService
    ) { }

    @Input() pokemon: Pokemon;
    pokemonTypeList: string[];

    ngOnInit(): void {
        this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
    }

    hasType(type: string): boolean {
        return this.pokemon.types.includes(type);
    }

    isTypesValid(type: string): boolean {
        const pokemonHasOneType = this.pokemon.types.length === 1;
        const pokemonHasTwoTypes = this.pokemon.types.length === 2;
        const checkboxSelected = this.hasType(type);

        if (pokemonHasOneType && checkboxSelected) return false;
        if (pokemonHasTwoTypes && !checkboxSelected) return false;

        return true;
    }


    selectType($event: Event, type: string) {
        const isChecked = ($event.target as HTMLInputElement).checked;

        if (isChecked) this.pokemon.types.push(type);
        else {
            const typeIndex = this.pokemon.types.indexOf(type);
            this.pokemon.types.splice(typeIndex, 1);
        }

    }

    onSubmit() {
        this.pokemonService.updatePokemon(this.pokemon)
            .subscribe((pokemon) => {
                if (pokemon) this.router.navigate(['/pokemon', pokemon.id])
                else alert('Error updating pokemon')
            });
    }

}
