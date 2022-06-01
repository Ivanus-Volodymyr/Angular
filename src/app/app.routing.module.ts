import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule)},
  {path: 'user', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)}
  // {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(value => value.PostsModule)},
  // {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
