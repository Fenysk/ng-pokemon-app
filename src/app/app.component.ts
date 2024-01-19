import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [
        CommonModule,
        RouterOutlet,
        RouterModule,
        FormsModule
    ],
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.template.html',
})
export class AppComponent {

}
