import {Component, OnInit} from '@angular/core';
import {DataService} from "../../movie/services";
import {IResults} from "../../movie/models";
import {urls} from "../../../constants";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  movies: IResults[];
  img: string
  itemsPerSlide: number;

  constructor(private movieDataService: DataService) {
  }

  ngOnInit(): void {
    this.movieDataService.storageVote.subscribe(value => {
      this.movies = value
    });
    this.img = urls.img;
    this.itemsPerSlide = this.mobileDevice() ? 2 : 4;
  }

  mobileDevice(): boolean {
    return !!(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i));
  }

}
