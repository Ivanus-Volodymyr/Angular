import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenresComponent } from './components/genres/genres.component';
import { GenreComponent } from './components/genre/genre.component';


@NgModule({
    declarations: [
        GenresComponent,
        GenreComponent
    ],
    exports: [
        GenresComponent
    ],
    imports: [
        CommonModule,
        GenreRoutingModule
    ]
})
export class GenreModule { }
