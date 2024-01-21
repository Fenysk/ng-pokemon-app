import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    imports: [
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.template.html',
})
export class AppComponent {

}
