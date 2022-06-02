import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IMovieDetails} from "../../../models";
import {MovieService} from "../../../services";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<IMovieDetails> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetails> | Promise<IMovieDetails> | IMovieDetails {
    const id = route.params['id'];
    return this.movieService.getMovieById(id);
  }
}
