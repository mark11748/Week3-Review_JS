import { Component } from '@angular/core';
import { Animal } from './animal.model'
import { ListComponent } from './list.component'

@Component({
  selector: 'app-root',
  template: `
  <h1>My Angular App</h1>
  <br>
  <listAll  [childRoster] = "masterRoster"></listAll>
  <br>
  `
  // (editRequest)="editList($event)
  // <listAdd  (addSender)   =""            ></listAdd>
  // <listEdit (amendSender) =""            ></listEdit>
})

export class AppComponent {
  masterRoster : Animal[] = [ new Animal("Bob",2,"M","Penguine"),
                              new Animal("Joule",4,"F","Lynx"),
                              new Animal("Eric",46,"M","Duck") ];
  // focus : Animal = null;
  // editList(selectedAnimal:Animal){
  //   this.focus = selectedAnimal;
  // }
  // listAmend(){}
}
