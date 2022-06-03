import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {RatingConfig, RatingModule} from "ngx-bootstrap/rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {MovieRoutingModule} from './movie-routing.module';
import {DataService, MovieService} from "./services";
import {MoviesComponent} from "./components/movies/movies.component";
import {GenreModule} from "../genre/genre.module";
import {TestCarouselModule} from "../carusel/carousel.module";
import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieResolver} from "./components/movie-details/resolver";


@NgModule({
  declarations: [
    MoviesComponent,
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
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MoviesComponent
  ],
  providers: [
    DataService,
    MovieService,
    MovieResolver,
    RatingConfig,
  ],
})
export class MovieModule {
}
