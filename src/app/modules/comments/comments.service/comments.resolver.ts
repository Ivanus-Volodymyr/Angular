import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IComment} from "../comments.models";
import {CommentsService} from "./comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComment[]> {

  constructor(private commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
    return this.commentsService.getComments();
  }

}
