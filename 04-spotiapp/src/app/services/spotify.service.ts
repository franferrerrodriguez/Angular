import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:string = "BQAvTcmf2q8AL-5iob3FWQyJrw2gtmUPhqUm-ZkbvveWqxV9SsKXiIcyNh8cVLpsPs2HRHz9OoIraEagHDc";

  constructor( private httpClient:HttpClient ) { 
    console.log("Servicio Spotify Listo");
  }

  getNewReleases():any{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.httpClient.get(
      'https://api.spotify.com/v1/browse/new-releases?country=ES&limit=40',
      { headers }
    );
  }

  search(q:string):any{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.httpClient.get(
      `https://api.spotify.com/v1/search?q=${ q }&type=artist&limit=10&offset=5`,
      { headers }
    );
  }

}