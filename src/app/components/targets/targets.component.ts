import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent {

  @Input() items:any[] = []
  constructor(private router:Router) { }

  viewArtist( id:any ){
    this.router.navigate( ['/artist',id] );
    console.log(id);
  }

}
