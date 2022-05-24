import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts.components/posts/posts.component";
import {PostDetailsComponent} from "./posts.components/post.details/post.details.component";
import {PostDetailsResolver, PostsResolver} from "./posts.service";
import {PostsGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [PostsGuard],
    children: [
      {
        path: 'details/:id', component: PostDetailsComponent,
        resolve: {postDetailData: PostDetailsResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
