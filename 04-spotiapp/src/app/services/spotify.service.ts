import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:string = "BQCMqe4HrOklKRrpKE7YN9raj5BgnRxL1He4f0NblBunTKKCnA3fKnA6IBxmNjMF3-td-ZIEqyIW3dFe9dw";

  constructor( private http:HttpClient ) { 
    console.log("Servicio Spotify Listo");
  }

  getNewReleases():any{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?country=ES&limit=40',
      { headers }
    ).pipe(map( (data:any) => {
      return data.albums.items;
    } ));
  }

  search(q:string):any{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${ q }&type=artist&limit=10&offset=5`,
      { headers }
    ).pipe(map( (data:any) => data.artists.items ) );
  }

}