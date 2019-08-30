import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'securedom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){ }

  transform(value: any, uri:string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(uri + value);
  }

}