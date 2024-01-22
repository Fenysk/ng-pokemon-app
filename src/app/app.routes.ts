import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },

    {
        path: 'login',
        title: 'Login',
        component: LoginComponent
    },

    { path: '', loadChildren: () => PokemonModule },

    {
        path: '**',
        title: 'Page not found',
        component: PageNotFoundComponent
    }
];
