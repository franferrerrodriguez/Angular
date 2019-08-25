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
  "BQA_h-U_eiL24RIj1DWfJKi1NWCHeLx4wUWfN-nzU0Wc7rLV-BmCMZlwEFP2qLPJd7D2SmE1yoLYzAwfog8";

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
      //console.log(data);
      return data.albums.items;
    } ));

  }

  searchAllArtists(q:string):any{

    return this.getQuery(`search?q=${ q }&type=artist&limit=10&offset=5`).pipe(map( (data:any) => {
      //console.log(data);
      return data.artists.items;
    } ));

  }

  searchArtistById(id:number):any{

    return this.getQuery(`artists/${ id }`).pipe(map( (data:any) => {
      //console.log(data);
      return data;
    } ));

  }

}