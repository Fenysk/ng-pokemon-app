import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: 'login.style.scss'
})
export class LoginComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    message: string = 'Vous êtes déconnecté.';
    isLoggedIn: boolean = false;

    pseudo: string = 'Fenysk';
    password: string = 'password';

    updateMessage() {
        if (this.authService.isLoggedIn) {
            this.isLoggedIn = true;
            this.message = 'Vous êtes connecté.';
        } else {
            this.isLoggedIn = false;
            this.message = 'Vous êtes déconnecté.';
        }
    }

    ngOnInit() {
        this.updateMessage();
    }

    handleLogin() {
        this.message = 'Tentative de connexion en cours...';
        this.authService.login(this.pseudo, this.password)
            .subscribe((isLoggedIn: boolean) => {
                this.updateMessage()
                if (isLoggedIn)
                    this.router.navigate(['/pokemons'])
                else {
                    this.message = 'Pseudo ou mot de passe incorrect.';
                    this.password = '';
                };
            });
    }

    handleLogout() {
        this.authService.logout();
        this.updateMessage();
    }

}
