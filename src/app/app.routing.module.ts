import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(value => value.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(value => value.PostsModule)},
  {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
