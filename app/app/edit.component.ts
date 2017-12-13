import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'
@Component({
  selector:'<listEdit></listEdit>',
  template:
  `<div *ngIf="focus">
    <input type="text"  [(ngModel)]="focus.name">
    <input type="number"[(ngModel)]="focus.age"  min="0">
    <input type="radio" [(ngModel)]="focus.gender" [value]="M">Male<br>
    <input type="radio" [(ngModel)]="focus.gender" [value]="F">Female<br>
    <input type="text"  [(ngModel)]="focus.species">
    <br>
    <p><button (click)="">AMEND</button>    <button (click)="">ABORT</button></p>
  </div>`
})
export class EditComponent {
  
}
