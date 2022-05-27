import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
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
    const post = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IPost;

    if (post) {
      return post;
    }

    const id = route.paramMap.get('id');
    return this.postsService.getPostById(id);
  }

}
