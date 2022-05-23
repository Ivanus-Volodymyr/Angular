import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {IPost} from "../posts.models";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<IPost> {

  constructor(private postsService: PostsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    const post = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
    if (post) {
      return post;
    }
    const id = route.paramMap.get('id');
    return this.postsService.getPostById(id);
  }

}
