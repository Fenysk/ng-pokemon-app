import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    imports: [CommonModule, RouterOutlet, RouterModule],
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.template.html',
})
export class AppComponent {

}
