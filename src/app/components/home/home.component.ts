import { Component } from '@angular/core';
import { DesktopComponent } from "../desktop/desktop.component";
import { TaskbarComponent } from "../taskbar/taskbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [DesktopComponent, TaskbarComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
