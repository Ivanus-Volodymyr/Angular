import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IMovie, IMovieDetails} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(page: number, genre: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movies + page + '&with_genres=' + genre);
  }

  getMovieById(id: string): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(urls.movieById + `${id}?api_key=865a7502a1780159827b764af0bee919`);
  }

  getMovieByNae(name: string, page: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movieByName + name + '&page=' + page);
  }
}
