import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../posts.models";
import {PostsService} from "../../posts.service";

@Component({
  selector: 'app-post.details',
  templateUrl: './post.details.component.html',
  styleUrls: ['./post.details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;
  postId: string;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.activatedRoute.params.subscribe(value => this.postDetails = history.state.data);
      this.activatedRoute.params.subscribe(value => this.postId = value['id']);
    }

    this.activatedRoute.params.subscribe(value => this.postId = value['id']);
    this.postsService.getPostById(this.postId).subscribe(value => this.postDetails = value)
  }

}
