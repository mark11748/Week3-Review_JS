import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'
import { AddComponent } from './add.component'
@Component({
  selector:'<listAll></listAll>',
  template:
  `<div>
    <ul>
      <li *ngFor="let animal of childRoster">{{animal.name}}</li>
    </ul>
    <button (click)="addRequest.emit()">ADD</button>
  </div>`
})
export class ListComponent {
  @Input()  childRoster: Animal[];
  @Output() addRequest = new EventEmitter();
  // @Output() editRequest = new EventEmitter();
  // edit(animal:Animal) {
  //     this.editRequest.emit(animal);
  // }
}
