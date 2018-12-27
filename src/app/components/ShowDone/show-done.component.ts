import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ShowDone',
    template: `<div class="show-completed">
        <label>
            Show completed todos?
            <input type="checkbox" (change)="toggleDone()" [(ngModel)]="showDone"/>
        </label>
    </div>`
})

export class ShowDone {
    public showDone = true;

    @Output()
    toggleDoneEvent: EventEmitter<any> = new EventEmitter();

    public toggleDone() {
        this.toggleDoneEvent.emit(this.showDone);
    }
}
