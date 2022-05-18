import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments)
  }
}
