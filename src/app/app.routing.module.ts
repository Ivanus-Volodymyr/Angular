import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(value => value.AuthModule)},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
