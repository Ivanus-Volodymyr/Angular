import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MovieResolver} from "./components/movie-details/resolver";

const routes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: ':id', component: MovieDetailsComponent,
    resolve: {data: MovieResolver},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
