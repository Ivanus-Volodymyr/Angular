import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../models/IPost";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }
  getPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }
}
