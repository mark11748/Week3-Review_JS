import { Component } from '@angular/core';
import { Animal } from './animal.model'
import { ListComponent } from './list.component'
import { AddComponent } from './add.component'

@Component({
  selector: 'app-root',
  template: `
  <h1>My Angular App</h1>
  <br>
  <listAll  [childRoster] = "masterRoster"
            (addRequest)="toggleAddForm()"
            (rmvRequest)="rmvEntry($event)"
            ></listAll>
  <br>
  <newAnimal *ngIf="showAddForm" (sendNew) = "addNew($event);toggleAddForm();" ></newAnimal>


  `
  // <editAnimal *ngIf="showEditForm" (sendEdit) = "amend($event);toggleEditForm();" ></editAnimal>
  // <editAnimal *ngIf="showEditForm = true;"></editAnimal>
  // (editRequest)="editList($event)
  // <listAdd  (addSender)   =""            ></listAdd>
  // <listEdit (amendSender) =""            ></listEdit>
})

export class AppComponent {
  masterRoster : Animal[] = [ new Animal("Bob",2,"M","Penguine"),
                              new Animal("Joule",4,"F","Lynx"),
                              new Animal("Eric",46,"M","Duck") ];
                              showAddForm  = false;
                              // showEditForm = false;

  toggleAddForm(){
    if(this.showAddForm)
    {this.showAddForm=false;}
    else
    {this.showAddForm =true;}
  }

  addNew(newAnimal:Animal){
    this.masterRoster.push(newAnimal);
  }
  editEntry(selectedAnimal:Animal){}
  rmvEntry(selectedAnimal:Animal){
    let targetIndex = this.masterRoster.indexOf(selectedAnimal);
    this.masterRoster.splice(targetIndex,1);
  }
  // focus : Animal = null;
  // editList(selectedAnimal:Animal){
  //   this.focus = selectedAnimal;
  // }
  // listAmend(){}
}
