import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkimg'
})
export class CheckimgPipe implements PipeTransform {

  transform(value: any, argssys?: any): any {

    if(value && value.length > 0)
      return value[0].url;

    return "/assets/img/noimg.jpg";
  }

}