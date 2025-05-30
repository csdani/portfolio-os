import { Component } from '@angular/core';
import { WindowComponent } from "../window/window.component";

@Component({
    selector: 'app-desktop',
    standalone: true,
    imports: [WindowComponent],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

}
