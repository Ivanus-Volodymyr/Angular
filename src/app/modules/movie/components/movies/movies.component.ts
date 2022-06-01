import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services";
import {IResults} from "../../models";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IResults[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => console.log(value))
  }

  next(): void {
    this.dataService.storage.next({page: +1});
  }
}
