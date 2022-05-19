import { Component, OnInit } from '@angular/core';

import {PostsService} from "../../posts.service";
import {IPost} from "../../posts.models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

}
