import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model'
@Component({
  selector:'<editAnimal></editAnimal>',
  template:
  `<div>
    <input [(ngModel)]="animalToEdit.name"><br>
    <input type="number" min="0" [(ngModel)]="animalToEdit.age"><br>
    <label>Gender: </label>
    <select [(ngModel)]="animalToEdit.gender">
      <option [value]="M"> Male </option>
      <option [value]="F"> Female </option>
    </select><br>
    <input [(ngModel)]="animalToEdit.species"><br>

    <button (click)="amend();">AMEND</button>

  </div>`
})
export class EditComponent {
  @Input() animalToEdit: Animal;
  @Output() sendEdit = new EventEmitter();
  amend(){
    this.sendEdit.emit(this.animalToEdit);
    console.log(this.animalToEdit);
  }

// <button (click)="cancel();">CANCEL</button>
// newVals: Animal = this.animalToEdit;
// cancel(){
//   console.log(this.newVals);
//   this.animalToEdit=this.newVals;
//   console.log(this.animalToEdit);
// }

}
