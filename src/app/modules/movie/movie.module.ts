import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";


import {MovieRoutingModule} from './movie-routing.module';
import {DataService, MovieService} from "./services";
import {MoviesComponent} from "./components/movies/movies.component";
import {PaginationComponent} from './components/pagination/pagination.component';
import {NgxPaginationModule} from "ngx-pagination";
import {GenreModule} from "../genre/genre.module";
import {TestCarouselModule} from "../carusel/carousel.module";
import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {BrowserModule} from "@angular/platform-browser";
import {MovieResolver} from "./components/movie-details/resolver";


@NgModule({
  declarations: [
    MoviesComponent,
    PaginationComponent,
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    NgxPaginationModule,
    GenreModule,
    TestCarouselModule,
  ],
  exports: [
    MoviesComponent
  ],
  providers: [
    DataService,
    MovieService,
    MovieResolver,
  ]
})
export class MovieModule {
}
