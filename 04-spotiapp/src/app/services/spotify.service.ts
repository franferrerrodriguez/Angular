import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    return this.httpClient.get(this.url)
      .toPromise()
      .then((token:any) => {
        this.token = token.access_token;
       })
      .catch((e) => {
        e.status = 500;
        e.statusText = "KO";
        throw e;
      });
  }

  async getQuery(query:string){

    try {
      await this.generateToken();
    } catch (e) {
      console.log(e);
      this.handleError(e);
    }
      
    const URI = `https://api.spotify.com/v1/${ query }`;

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.httpClient.get(URI, { headers });

  }

  async getNewReleases(){

    try {
      const e = await this.getQuery(`browse/new-releases?country=ES&limit=40`);
      return e.pipe(map((data:any) => {
        return data.albums.items;
      }));
    } catch (e) {
      this.handleError(e);
    }

  }

  async searchAllArtists(search:string){

    try {
      const e = await this.getQuery(`search?q=${ search }&type=artist&limit=15`);
      return e.pipe(map((data:any) => {
        return data.artists.items;
      }));
    } catch (e) {
      this.handleError(e);
    }

  }

  async searchArtistById(id:number){

    try {
      return await this.getQuery(`artists/${ id }`);
    } catch (e) {
      this.handleError(e);
    }

  }

  async searchTracksByIdArtist(id:number){

    try {
      const e = await this.getQuery(`artists/${ id }/top-tracks?country=es`);
      return e.pipe(map((data:any) => {
        return data.tracks;
      }));
    } catch (e) {
      this.handleError(e);
    }

  }

  handleError(error:HttpErrorResponse){

    switch (error.status) {
      case 401:
        throw error;
      case 404:
        throw error;
      case 500: 
        throw error;
    }
    
  }

}