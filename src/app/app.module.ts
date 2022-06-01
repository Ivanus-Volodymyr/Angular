import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app.routing.module";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {MovieModule} from "./modules/movie/movie.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
