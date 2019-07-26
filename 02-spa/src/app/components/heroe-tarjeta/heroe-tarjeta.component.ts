import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Output() emitirIdHeroe: EventEmitter<number>;

  constructor() {
    this.emitirIdHeroe = new EventEmitter();
  }

  ngOnInit() {

  }

  // Desde heroe-tarjeta.component.html lanzamos este verHeroe()
  // que a su vez desde heroes.component.html lanzará
  // un evento Emitter (emitirIdHeroe) que llamará a verHeroe()
  // de heroes.component.ts
  verHeroe(){
    this.emitirIdHeroe.emit(this.heroe.id);
  }
  
}