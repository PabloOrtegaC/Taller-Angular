import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let sum: number = 0;
      this.series.forEach(s => {sum += s.seasons});
      this.averageSeasons = sum/this.series.length;
    });
  }


  ngOnInit() {
    this.getSeries();
  }

}
