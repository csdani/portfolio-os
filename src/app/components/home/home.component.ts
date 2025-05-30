import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DesktopComponent } from "../desktop/desktop.component";
import { TaskbarComponent } from "../taskbar/taskbar.component";
import { WindowComponent } from "../window/window.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [DesktopComponent, TaskbarComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    @ViewChild('desktop', { static: true }) desktop!: DesktopComponent;
    @ViewChild('taskbar', { static: true }) taskbar!: TaskbarComponent;

    private globalClickUnlisten: (() => void) | undefined;

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngAfterViewInit() {
        this.globalClickUnlisten = this.renderer.listen('document', 'click', (event: MouseEvent) => {
            const startButton = document.querySelector('.start-button');
            if (startButton && startButton.contains(event.target as Node)) {
                // Clicked on start button, do nothing
                return;
            }
            this.onGlobalClick(event);
        });
    }

    onGlobalClick(event: MouseEvent) {
        this.taskbar.closeStartMenu();
    }

    ngOnDestroy() {
        if (this.globalClickUnlisten) {
            this.globalClickUnlisten();
        }
    }
}
