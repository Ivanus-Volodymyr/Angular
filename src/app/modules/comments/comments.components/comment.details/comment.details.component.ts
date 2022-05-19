import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentsService} from "../../comments.service";
import {IComment} from "../../comments.models";

@Component({
  selector: 'app-comment.details',
  templateUrl: './comment.details.component.html',
  styleUrls: ['./comment.details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetail: IComment;
  commentId: string;

  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.activatedRoute.params.subscribe(value => this.commentDetail = history.state.data);
      this.activatedRoute.params.subscribe(value => this.commentId = value['id']);
    }
    this.activatedRoute.params.subscribe(value => this.commentId = value['id']);
    this.commentsService.getCommentById(this.commentId).subscribe(value => this.commentDetail = value);
  }

}
