import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { IMovie, IMovies } from '../interfaces/interfaces';
import { PipesModule } from '../pipes/pipes.module';
import { ParesPipe } from '../pipes/pares.pipe';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  cartelera: IMovie[] = [];
  recientes: IMovie[] = [];
  populares: IMovie[] = [];

  constructor(private ss: ServicioService) {
  }

  ngOnInit() {
    this.ss.getMovies().subscribe((respuesta:IMovies) => {
      this.cartelera=[...respuesta.results];
    });
    this.ss.getRecientes().subscribe((respuesta:IMovies) => {
      this.recientes=[...respuesta.results];
    });
    this.ss.getPopulares().subscribe((respuesta:IMovies) => {
      this.populares=[...respuesta.results];
    });
    /*
    var populares: IMovie[] = [];
    this.ss.getPopulares().subscribe((respuesta:IMovies) => {
      populares.push(...respuesta.results);
      this.arriba = new ParesPipe().transform(populares)[0];
      this.abajo = new ParesPipe().transform(populares)[1];
    });
    */
  }

  cargarMas(){
    this.ss.getPopulares().subscribe((respuesta:IMovies) => {
      this.populares=[...this.populares,...respuesta.results];
    })
  }

}
