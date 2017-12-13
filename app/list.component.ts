import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'
@Component({
  selector:'<listAll></listAll>',
  template:
  `<div><ul>
    <li *ngFor="let animal of childRoster">{{animal.name}}</li>
  </ul></div>`
})
export class ListComponent {
  @Input() childRoster: Animal[];
  // @Output() editRequest = new EventEmitter();
  // edit(animal:Animal) {
  //     this.editRequest.emit(animal);
  // }
}
