import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SpotifyTokenService } from './spotify.token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private url = 'http://localhost/Angular/04-spotiapp/php/token/index.php';
  private token:string;

  constructor( private httpClient:HttpClient ) { 
    console.log("Servicio Spotify Listo");
  }

  generateToken() {
    return new Promise(resolve => {
      this.httpClient.get(this.url)
      .pipe(map((data:any) => { return data.access_token; }))
      .subscribe(token => { 
        //console.log("Generate Token: " + token);
        this.token = token;
        resolve();
      });
    });
  }

  async getQuery(query:string){

    await this.generateToken();

    const URI = `https://api.spotify.com/v1/${ query }`;

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.httpClient.get(URI, { headers })

  }

  async getNewReleases(){

    const e = await this.getQuery("browse/new-releases?country=ES&limit=40");
    return e.pipe(map( (data:any) => {
      // console.log(data);
      return data.albums.items;
    } ));

  }

  async searchAllArtists(q:string){

    const e = await this.getQuery(`search?q=${ q }&type=artist&limit=10&offset=5`);
    return e.pipe(map( (data:any) => {
      // console.log(data);
      return data.artists.items;
    } ));

  }

  async searchArtistById(id:number){

    const e = await this.getQuery(`artists/${ id }`);
    return e.pipe(map( (data:any) => {
      console.log(data);
      return data;
    } ));

  }

}