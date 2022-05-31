import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  arr =[1,2,3,4,5]

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => console.log(value.results))
    console.log(this.arr.toString());
  }

}
