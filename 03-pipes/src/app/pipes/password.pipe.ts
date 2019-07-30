import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'password'})
export class Password implements PipeTransform {
  transform(value: string, activate:boolean): string {

    let result:string = "";

    if(activate)
        for(let i of value)
            result += "*";
    else
        result = value;

    return result;

  }
}