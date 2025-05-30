import { Component } from '@angular/core';

@Component({
    selector: 'app-taskbar',
    standalone: true,
    imports: [],
    templateUrl: './taskbar.component.html',
    styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {
    private isStartMenuOpen = false;

    constructor() { }

    getIsStartMenuOpen(): boolean {
        return this.isStartMenuOpen;
    }

    toggleStartMenu() {
        this.isStartMenuOpen = !this.isStartMenuOpen;
    }

    closeStartMenu() {
        this.isStartMenuOpen = false;
    }
}
