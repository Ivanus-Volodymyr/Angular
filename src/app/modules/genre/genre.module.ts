import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";


import {GenreRoutingModule} from './genre-routing.module';
import {GenresComponent} from './components/genres/genres.component';
import {GenreComponent} from './components/genre/genre.component';
import {DataService, GenreService} from "./services";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent
  ],
  exports: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    GenreService,
  ]
})
export class GenreModule {
}
