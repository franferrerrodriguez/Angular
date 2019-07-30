import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'domsecure'})
export class DomSecure implements PipeTransform {
  transform(value: string): string {

    return "";

  }
}