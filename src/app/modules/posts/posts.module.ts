import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.components/posts/posts.component';
import {PostsService} from "./posts.service";
import { PostComponent } from './posts.components/post/post.component';
import { PostDetailsComponent} from './posts.components/post.details/post.details.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers:[PostsService]
})
export class PostsModule { }
