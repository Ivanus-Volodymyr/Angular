import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IMovie} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(page: number, genre: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movies + page + '&with_genres=' + genre)
  }
}
