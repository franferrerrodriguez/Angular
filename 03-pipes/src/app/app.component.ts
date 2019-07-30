import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Pipes Angular';

  name1:string = 'Francisco';

  name2:string = 'franCisco jOse ferrer RodriGUeZ';

  full_name1:string = 'Francisco José Ferrer Rodríguez';

  array1:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI:number = Math.PI;

  percent:number = 0.234;

  money:number = 1234.5;

  json = {
    "id" : "1",
    "name" : "Francisco",
    "last_name" : "Ferrer",
    "address" : {
      "address" : "Naranja",
      "num" : "2"
    }
  }

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  })

  date:Date = new Date();

  show_password:boolean = false;

}