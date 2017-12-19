import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';
@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(oldRoster:Animal[],type:number) {
    let newRoster:Animal[] = [];
    oldRoster.forEach(animal => {
      // switch (type)
      // {
      //   case 1:
      //     if(animal.gender==="M"){ newRoster.push(animal); }
      //     break;
      //   case 2:
      //     if(animal.gender==="F"){ newRoster.push(animal); }
      //     break;
      // }
      switch (type)
      {
        //youngest first
        case 1:
          let lowest = 0;
          while (oldRoster.length>0) {
            oldRoster.forEach((x,i) => {
              if (oldRoster[lowest].age>x.age)
              { lowest = i; }
            });
            newRoster.push(oldRoster.splice(lowest,1)[0]);
          }
          return newRoster;
          //oldest first
        case 2:
          let highest = 0;
          while (oldRoster.length>0) {
            oldRoster.forEach((x,i) => {
              if (oldRoster[highest].age<x.age)
              { highest = i; }
            });
            newRoster.push(oldRoster.splice(highest,1)[0]);
          }
          return newRoster;
          //unsorted
        default:
          return oldRoster;
      }
    });
    // if(newRoster.length!=0){return newRoster;}
    // else{return oldRoster;}
  }
}
