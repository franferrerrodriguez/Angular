import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient:HttpClient ) { 
    console.log("Servicio Spotify Listo");
  }

  getNewReleases():any{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaFB05YT9jHBM2siLkJAuRpPAhRaVGtd9iM4Q35FgWnMtIGir_LduzJeRcqPIUwbRIsFJrtJS5-j9_Yq0'
    });

    return this.httpClient.get(
      'https://api.spotify.com/v1/browse/new-releases?country=ES&limit=40',
      { headers }
    );
  }

}