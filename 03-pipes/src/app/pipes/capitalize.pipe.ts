import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {

    let palabra = value.toLocaleLowerCase().split(" ");

    for(let i in palabra)
      palabra[i] = palabra[i][0].toUpperCase() + palabra[i].substring(1, palabra[i].length);

    // return palabra.toString().replace(/,/g, ' ');
    return palabra.join(" ");
  }
}