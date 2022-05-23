import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments.components/comments/comments.component';
import {CommentComponent} from './comments.components/comment/comment.component';
import {CommentDetailsComponent} from './comments.components/comment.details/comment.details.component';
import {CommentsService, CommentsResolver ,CommentDetailsResolver} from "./comments.service";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
  ],
  providers: [CommentsService, CommentsResolver, CommentDetailsResolver]
})
export class CommentsModule {
}
