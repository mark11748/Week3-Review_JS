import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>My Angular App</h1>
  <br>
  <listAll  [childRoster] ="masterRoster" (editRequest)="editList($event)"></listAdd>
  <listAdd  (addSender)   =""            ></listAdd>
  <listEdit (amendSender) =""            ></listEdit>
  <br>
  `
})

export class AppComponent {
  constructor (public masterRoster : Animal[]) { }
  focus : Animal = null;

  listAll(){}
  editList(selectedAnimal:Animal){
    this.focus = selectedAnimal;
  }
  // listAmend(){}
}
