import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyTokenService {

  private url = 'http://localhost/Angular/04-spotiapp/php/token/index.php';
  public token:string;

  constructor( private httpClient:HttpClient ) { 
    console.log("Servicio Token Spotify Listo");
  }
  
  getToken():any{

    return this.httpClient.get(this.url).subscribe( (data:string) => {
        console.log("FROM TOKEN SERVICE");
        console.log(data);
        this.token = data;
    });
    
  }
  
}