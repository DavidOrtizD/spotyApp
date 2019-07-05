/*** Module imports ***/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/*** Local Imports ***/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
/*** Routes Import ***/
import { ROUTES } from './app.routes';
/*** Pipes ***/
import { NoImagePipe } from './pipes/no-image.pipe';
import { secureDomPipe } from './pipes/domseguro.pipe';
import { TargetsComponent } from './components/targets/targets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    secureDomPipe,
    TargetsComponent,
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
