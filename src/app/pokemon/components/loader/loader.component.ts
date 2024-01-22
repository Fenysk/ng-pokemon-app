import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    standalone: true,
    imports: [],
    template: `
    <div class="h-[70vh] flex items-center justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="Pokeball" class="w-64 mx-auto">
    </div>
  `,
    styles: `
    // spin animation for the pokeball
    img {
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    `
})
export class LoaderComponent {

}
