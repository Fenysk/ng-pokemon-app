import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonTypeColor',
    standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

    transform(pokemonType: string): string {

        let color: string;

        switch (pokemonType) {
            case 'Fire':
                color = 'red-400';
                break;
            case 'Water':
                color = 'blue-400';
                break;
            case 'Leaf':
                color = 'green-500';
                break;
            case 'Poison':
                color = 'purple-400';
                break;
            case 'Flying':
                color = 'indigo-400';
                break;
            case 'Bug':
                color = 'green-400';
                break;
            case 'Electric':
                color = 'yellow-400';
                break;
            case 'Normal':
                color = 'gray-400';
                break;
            case 'Ground':
                color = 'orange-400';
                break;
            case 'Fairy':
                color = 'pink-400';
                break;
            case 'Fighting':
                color = 'red-700';
                break;
            case 'Psychic':
                color = 'purple-600';
                break;
            case 'Rock':
                color = 'gray-600';
                break;
            case 'Steel':
                color = 'blue-600';
                break;
            case 'Ice':
                color = 'blue-200';
                break;
            case 'Ghost':
                color = 'indigo-600';
                break;
            case 'Dragon':
                color = 'yellow-600';
                break;
            default:
                color = '';
                break;
        }

        return `bg-${color} text-white`;
    }

}
