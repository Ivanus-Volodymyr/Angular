import {Component, OnInit} from '@angular/core';
import {IGenre} from "../../models";
import {DataService} from "../../services";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenre[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => this.genres = value)
  }

}
