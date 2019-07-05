import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor( private Spotify : SpotifyService, private router : ActivatedRoute) { }

  ngOnInit() {
    this.getArtist();

  }

  artistInfo:any = {};
  topTracksInfo:any = {};
  artistIsLoaded:boolean = false;
  trackInfoIsLoaded:boolean = false;
  componentErrorMsg:string = "";

  getArtist(){
    this.router.params.subscribe(params => {
      this.Spotify.getSingleArtist(params.id).subscribe( (data:any) => {
        this.artistInfo = data;
        this.artistIsLoaded = true;
      }, (error) =>{
        this.componentErrorMsg = error.error.error.message;
      });

      this.Spotify.getTopTracks(params.id).subscribe( (data:any) => {
          this.topTracksInfo = data;
          this.trackInfoIsLoaded = true;
          console.log(this.topTracksInfo);
      }, (error) =>{
        this.componentErrorMsg = error.error.error.message;
      });



    });
  }
}
