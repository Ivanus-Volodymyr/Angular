import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";


import {MovieRoutingModule} from './movie-routing.module';
import {DataService, MovieService} from "./services";
import {MoviesComponent} from "./components/movies/movies.component";
import {PaginationComponent} from './components/pagination/pagination.component';
import {NgxPaginationModule} from "ngx-pagination";
import {GenreModule} from "../genre/genre.module";


@NgModule({
  declarations: [
    MoviesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    NgxPaginationModule,
    GenreModule,
  ],
  exports: [
    MoviesComponent
  ],
  providers: [
    DataService,
    MovieService,
  ]
})
export class MovieModule {
}
