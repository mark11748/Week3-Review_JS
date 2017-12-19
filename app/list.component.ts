import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'
import { AddComponent } from './add.component'
@Component({
  selector:'<listAll></listAll>',
  template:
  //parseInt fails in template -> 'x'*1 casts number
  `<div>
    <label>FILTER: </label>
    <select (change)="changeFilter($event.target.value)">
    <option [value]="0">ALL</option>
    <option [value]="1">YOUNG</option>
    <option [value]="2">OLD</option>
    </select>
    <ul>
      <div>
        <li *ngFor="let animal of childRoster | filter:filterType">{{animal.name}}
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
  filterType:Number = 0;

  changeFilter(type:string){
    this.filterType = parseInt(type);
  }


  // @Output() editRequest = new EventEmitter();
  // edit(animal:Animal) {
  //     this.editRequest.emit(animal);
  // }
}
