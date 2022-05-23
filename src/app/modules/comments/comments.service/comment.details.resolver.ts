import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from "../comments.models";
import {CommentsService} from "./comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<IComment> {

  constructor(private commentsService: CommentsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    const comment = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
    if (comment) {
      return comment;
    }
    const id = route.paramMap.get('id')
    return this.commentsService.getCommentById(id);
  }

}
