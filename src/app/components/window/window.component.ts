import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [CdkDrag],
    templateUrl: './window.component.html',
    styleUrl: './window.component.scss'
})
export class WindowComponent {
    closeWindow() {
        console.log('Window closed');
    }

}
