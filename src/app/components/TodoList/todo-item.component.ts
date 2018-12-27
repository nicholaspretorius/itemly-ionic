import { Component, Input } from '@angular/core';

@Component({
    selector: 'TodoItem',
    template: `
    <ion-item [ngClass]="{ 'complete' : done }">
        <ion-label>
            {{ todo }}
        <input type="checkbox" [(ngModel)]="done"/>
        </ion-label>
    </ion-item>`
})

export class TodoItem {
    @Input()
    todo: string;

    @Input()
    done: boolean;
}
