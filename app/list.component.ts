import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'
import { AddComponent } from './add.component'
@Component({
  selector:'<listAll></listAll>',
  template:
  `<div>
    <ul>
      <div>
        <li *ngFor="let animal of childRoster">{{animal.name}}
          <p>
            <button (click)=editRequest.emit(animal)>EDIT</button> <button (click)=rmvRequest.emit(animal)>REMOVE</button>
          <p>
        </li>
      </div>
    </ul>
    <button (click)="addRequest.emit()">ADD</button>
  </div>`
})
export class ListComponent {
  @Input()  childRoster: Animal[];
  @Output() addRequest = new EventEmitter();
  @Output() rmvRequest = new EventEmitter();
  @Output() editRequest = new EventEmitter();


  // @Output() editRequest = new EventEmitter();
  // edit(animal:Animal) {
  //     this.editRequest.emit(animal);
  // }
}
