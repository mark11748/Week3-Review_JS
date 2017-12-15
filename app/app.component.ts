import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';


@Component({
  selector: 'app-root',
  template: `
  <h1>My Angular App</h1>
  <br>
  <listAll  [childRoster] = "masterRoster"
            (addRequest)  = "toggleAddForm()"
            (rmvRequest)  = "rmvEntry($event)"
            (editRequest) = "editEntry($event); toggleEditForm()"
            ></listAll>
  <br>
  <newAnimal  *ngIf="showAddForm"  (sendNew)  = "addNew($event);toggleAddForm();" ></newAnimal>
  <editAnimal *ngIf="showEditForm" [animalToEdit] = "parentAnimalToEdit"
                                   (sendEdit)     = "commitChange($event);toggleEditForm();"
                                   ></editAnimal>
  `
})

export class AppComponent {
  masterRoster : Animal[] = [ new Animal("Bob",2,"M","Penguine"),
                              new Animal("Joule",4,"F","Lynx"),
                              new Animal("Eric",46,"M","Duck") ];
  showAddForm  = false;
  showEditForm = false;
  parentAnimalToEdit:Animal;

  toggleAddForm(){
    if(this.showAddForm)
    {this.showAddForm = false;}
    else
    {this.showAddForm = true;}
  }
  addNew(newAnimal:Animal){
    this.masterRoster.push(newAnimal);
  }

  toggleEditForm(){
    if(this.showEditForm)
    {this.showEditForm = false;}
    else
    {this.showEditForm = true;}
  }
  editEntry(selectedAnimal:Animal) {
    this.parentAnimalToEdit = selectedAnimal;
  }
  commitChange(selectedAnimal:Animal) {
  let target = this.masterRoster.indexOf(this.parentAnimalToEdit);
  this.masterRoster[target]=selectedAnimal;
  }

  rmvEntry(selectedAnimal:Animal){
    let targetIndex = this.masterRoster.indexOf(selectedAnimal);
    this.masterRoster.splice(targetIndex,1);
  }
}
