// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Animal } from './animal.model'
// @Component({
//   selector:'<editAnimal></editAnimal>',
//   template:
//   `<div *ngIf="focus">
//     <input type="text"  [(ngModel)]="animalToEdit.name">
//     <input type="number"[(ngModel)]="animalToEdit.age"  min="0">
//     <input type="radio" [(ngModel)]="animalToEdit.gender" [value]="M">Male<br>
//     <input type="radio" [(ngModel)]="animalToEdit.gender" [value]="F">Female<br>
//     <input type="text"  [(ngModel)]="animalToEdit.species">
//     <br>
//     <p><button (click)="">AMEND</button>    <button (click)="">ABORT</button></p>
//   </div>`
// })
// export class EditComponent {
//   @Input() animalToEdit: Animal;
//   @Output() confirmEdit;
//   @Output() cancelEdit;
//
// }
