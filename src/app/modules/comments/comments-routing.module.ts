import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments.components/comments/comments.component";
import {CommentDetailsComponent} from "./comments.components/comment.details/comment.details.component";
import {CommentsResolver, CommentDetailsResolver} from "./comments.service";
import {CommentsGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [CommentsGuard],
    children: [
      {
        path: 'details/:id', resolve: {commentDetailsData: CommentDetailsResolver},
        component: CommentDetailsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
