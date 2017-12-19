import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';
@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(oldRoster:Animal[],type:number) {
    // let newRoster:Animal[] = oldRoster;
    let outputRoster:Animal[] = [];
    let target:number=0;
    let checked:number[]=[];
    //youngest first
    if(type==1){
      oldRoster.forEach((x)=>{
        if(x.age<5){outputRoster.push(x)}
      });
      return outputRoster;
    //   for(let i=0 ; i<newRoster.length ; i++)
    //   {
    //     newRoster.forEach((x,xIndex)=>{
    //       if (newRoster[target].age>x.age && checked.indexOf(xIndex)<0) //if younger than target and not yet pushed
    //       { target=xIndex; }
    //     });
    //     outputRoster.push(newRoster[target]);
    //     checked.push(target);
    //     console.log(target);
    //   }
    //   return outputRoster;
    }
    //newest first
    if(type==2){
      oldRoster.forEach((x)=>{
        if(x.age>5){outputRoster.push(x)}
      });
      return outputRoster;
  //     for(let i=0 ; i<newRoster.length ; i++)
  //     {
  //       newRoster.forEach((x,xIndex)=>{
  //         if (newRoster[target].age<x.age && checked.indexOf(xIndex)<0) //if older than target and not yet pushed
  //         { target=xIndex; }
  //       });
  //       outputRoster.push(newRoster[target]);
  //       checked.push(target);
  //       console.log(target);
  //     }
  //     return outputRoster;
  //   }
  //   return oldRoster;
    }
    return oldRoster;
  }
}
