import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector:'newAnimal',
  template:`<div>
    <input #name placeholder="NAME"><br>
    <input type="number" min="0" #age placeholder="AGE"><br>
    <label>Gender: </label>
    <select #gender>
      <option [value]="M"> Male </option>
      <option [value]="F"> Female </option>
    </select><br>
    <input #species placeholder="SPECIES"><br>

    <button (click)="SubmitNewAnimal(name.value,age.value,gender.value,species.value);
                     name.value='';
                     age.value='';
                     gender.value='' ;
                     species.value=''; ">CREATE</button>
  </div>`
})
export class AddComponent {
  @Output() sendNew = new EventEmitter();
  SubmitNewAnimal(name,age,gender,species){
    let newEntry : Animal = new Animal(name,parseInt(age.value),gender,species);
    this.sendNew.emit(newEntry);
  }

}
