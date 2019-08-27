import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyTokenService {

  private url = 'http://localhost/Angular/04-spotiapp/php/token/index.php';
  public token:string = "1";

  constructor( private httpClient:HttpClient ) {
    console.log("Servicio Token Spotify Listo");
  }


  
}