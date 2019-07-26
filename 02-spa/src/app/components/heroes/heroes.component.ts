import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[];
  private search:string;

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.heroes = [];

    this.activatedRoute.params.subscribe(params => {
      this.search = params.search;
      this.heroes = _heroesService.getHeroesByName(this.search);
    });

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  // Desde heroe-tarjeta.component.html lanzamos este verHeroe()
  // que a su vez desde heroes.component.html lanzará
  // un evento Emitter (emitirIdHeroe) que llamará a verHeroe()
  // de heroes.component.ts
  verHeroe(id_heroe:number){
    this.router.navigate(['heroes', '', 'heroe', id_heroe]);
  }

}