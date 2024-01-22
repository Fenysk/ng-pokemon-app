import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLoggedIn: boolean = false;

    login(pseudo: string, password: string): Observable<boolean> {
        const isLoggedIn = (pseudo === 'Fenysk' && password === 'password');

        return of(isLoggedIn)
            .pipe(
                delay(1000),
                tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
            )
    }

    logout() {
        this.isLoggedIn = false;
    }

}
