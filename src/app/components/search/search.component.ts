import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists : any[] = [];
  loading:boolean;
  errorHappened:boolean;
  componentErrorMsg:string = "";

  constructor( private Spotify : SpotifyService ) {
  }

  ngOnInit() {
  }

  buscar(termino:string){
    if(termino.trim().length>0){
      this.loading = true;
      this.Spotify.getArtists(termino).subscribe( (data:any) => {
        this.artists = data;
        this.loading=false;
        //console.log(this.artists);
      }, (error) => {
        this.componentErrorMsg = error.error.error.message;
        this.loading  = false;
        this.errorHappened = true;
      });
    }
  }

}
