import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) {}

  headers : HttpHeaders = new HttpHeaders({
    'Authorization' : 'Bearer BQBr5uVWESUzoEzwlSvvSiq3SkIfojzlHIu0nzN3DygET7t0xLNCQnNIuJC1RGLljRgw2jamUzKYK8VhWsk'
  });

  getQuery( query:string ){
    const RETURNEDURL = `https://api.spotify.com/v1/${query}`;
    let headers = this.headers;
    return this.http.get(RETURNEDURL, {headers});
  }

  getAuthentication():any{
    let headers = new HttpHeaders({
      'grant_type' : 'client_credentials',
      'client_id' : '6c8d1a7114ee4cdf8253b513de129b6d',
      'client_secret' : 'fb13586e80c1421ebd9dbf4ae38ddd39'
    });
    let dataToken = new Promise( (resolve, reject) => {
      this.http.post('https://accounts.spotify.com/api/token', {
        'grant_type' : 'client_credentials',
        'client_id' : '6c8d1a7114ee4cdf8253b513de129b6d',
        'client_secret' : 'fb13586e80c1421ebd9dbf4ae38ddd39'
      }).subscribe( data => {
        if(data){
          resolve(data);
        }else{
          reject('No response from spotify');
        }
      });
    });
    return dataToken;
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
      .pipe( map ( data => {
        return data['albums'].items;
      }) );
  }

  getArtists( termino : string){
    //return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe( map( data => {
      return data['artists'].items;
    }) );
  }

  getSingleArtist( artistId : string){
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks( artistId : string){
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
    .pipe(
      map( data => {
          return data['tracks'];
      })
    );
  }
}
