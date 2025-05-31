import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [CdkDrag, CdkDragHandle],
    templateUrl: './window.component.html',
    styleUrl: './window.component.scss'
})
export class WindowComponent {
    @Input() title: string = 'Window Title';

    dragActive = false;

    fullscreenWindow() {
        console.log('Window fullscreene clicked');
    }
    minimalizeWindows() {
        console.log('Window minimize clicked');
    }
    closeWindow() {
        console.log('Window close clicked');
    }

    onTitleBarMouseDown(event: MouseEvent) {
        const buttons = (event.currentTarget as HTMLElement).querySelector('.window-buttons-container');
        if (buttons && buttons.contains(event.target as Node)) {
            return;
        }
        this.activeDrag();
    }

    onTitleBarMouseUp($event: MouseEvent) {
        this.deactiveDrag();
    }

    private activeDrag() {
        this.dragActive = true;
    }

    private deactiveDrag() {
        this.dragActive = false;
    }

}
