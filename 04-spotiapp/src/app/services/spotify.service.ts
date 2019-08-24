import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log("Servicio Spotify Listo");
  }

  getQuery(query:string){

    const token:string = "BQAxx1EJtDpQTu937C5GHmaRc2cpIQw1ZhJwARIpF7mU_frDwK0HO_plVvtB_GLlbx-BxO90GcpXp0G3al0";
    const URI = `https://api.spotify.com/v1/${ query }`;

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(URI, { headers })

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