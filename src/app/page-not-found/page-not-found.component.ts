import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-page-not-found',
    standalone: true,
    template: `
    <div class="flex flex-col items-center">
        <h1 class="text-2xl">Error 404, page not found</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png" alt="">
    </div>
    <a routerLink="/pokemons" class="block text-center text-red-800 hover:underline">Back to home</a>
  `,
})
export class PageNotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
