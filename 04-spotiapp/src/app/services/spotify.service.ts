import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SpotifyTokenService } from './spotify.token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient:HttpClient/*, private s:SpotifyTokenService*/ ) { 
    //this.s.getToken();
    console.log("Servicio Spotify Listo");
  }

  private token:string = 
  "BQAov7P2avDLG8FATYfl7qQNL-ZpLp1MIOeqwzEdRWHMKwHTKRzk7l1a17MdUwU5FGuLVqCRZA70wxCH_00";

  getQuery(query:string){

    //console.log(this.s.token);

    const URI = `https://api.spotify.com/v1/${ query }`;

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.httpClient.get(URI, { headers })

  }

  getNewReleases():any{

    return this.getQuery("browse/new-releases?country=ES&limit=40").pipe(map( (data:any) => {
      return data.albums.items;
    } ));
  }

  search(q:string):any{

    return this.getQuery(`search?q=${ q }&type=artist&limit=10&offset=5`).pipe(map( (data:any) => {
      return data.artists.items;
    } ));

  }

}