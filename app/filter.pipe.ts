import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';
@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(oldRoster:Animal[],type:Number) {
    let newRoster:Animal[] = [];
    oldRoster.forEach(animal => {
      switch (type)
      {
        case 1:
          if(animal.gender==="M"){ newRoster.push(animal); }
          break;
        case 2:
          if(animal.gender==="F"){ newRoster.push(animal); }
          break;
      }
    });
    if(newRoster.length!=0){return newRoster;}
    else{return oldRoster;}
  }
}
