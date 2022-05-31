import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {DataService, MovieService} from "./services";
import {MoviesComponent} from "./components/movies/movies.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
  ],
  providers: [
    DataService,
    MovieService,
  ]
})
export class MovieModule {
}
