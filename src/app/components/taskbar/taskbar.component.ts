import { Component } from '@angular/core';

@Component({
    selector: 'app-taskbar',
    standalone: true,
    imports: [],
    templateUrl: './taskbar.component.html',
    styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {
    isStartMenuOpen = false;

    constructor() { }

    toggleStartMenu() {
        console.log('Start menu toggled');
        this.isStartMenuOpen = !this.isStartMenuOpen;
    }
}
