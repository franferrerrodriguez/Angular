import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})

export class BodyComponent {

    mostrarNgIf:boolean = true;
    
    frase:any = {
        autor : "Ben Parker",
        mensaje : "Un gran poder conlleva una gran responsabilidad"
    }
    
    personajes:string[] = ["Spiderman", "Batman", "Superman", "IronMan"];

}