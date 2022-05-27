import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IPost} from "../posts.models";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsService.getPosts();
  }

}
