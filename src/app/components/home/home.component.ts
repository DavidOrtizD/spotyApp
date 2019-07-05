import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs:any = [];
  loading:boolean;
  errorLoading:boolean;
  componentErrorMsg:string = "";
  //keepGoing:number = 0;

  constructor( private SpotifyService:SpotifyService /*private http:HttpClient*/ ) {
      this.loading = true;
      /*this.http.post('https://restcountries.https://accounts.spotify.com/api/token/rest/v2/lang/es').subscribe(data => {
        for(let index in data){
            console.log(data[index].name);
            console.log(data[index].population);
        }
      });*/
  }

  ngOnInit() {
    this.SpotifyService.getNewReleases().subscribe( (data:any) => {
      this.newSongs = data;
      this.loading = false;
      //console.log(this.newSongs);
    }, (error) => {
      this.componentErrorMsg = error.error.error.message;
      this.errorLoading = true;
      this.loading = false;
    });
    /*let interval = setInterval(() => {
      if(this.keepGoing <5){
        this.keepGoing++;
        this.test();
      }else{
         clearInterval(interval);
      }

    }, 1000);*/
  }

  /*test(){
    console.log("testing!!!");
  }*/


}
