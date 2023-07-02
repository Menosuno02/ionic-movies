import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { IMovieDetailed, ICast, IActor, IGenre } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input()
  id: string = "";

  peli!: IMovieDetailed;
  actores: IActor[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }

  titulo: string | undefined = "";
  rating: number = 0;
  votos: number = 0;
  descripcion: string = "";
  fondo: string = "";
  poster: string = "";
  generos: IGenre[] = [];
  isFav?: boolean;
  open: boolean = false;

  constructor(public ss: ServicioService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.ss.getDetailedMovie(this.id).subscribe((respuesta: IMovieDetailed) => {
      this.peli = respuesta;
      this.titulo = this.peli.title;
      this.rating = this.peli.vote_average;
      this.votos = this.peli.vote_count;
      this.descripcion = this.peli.overview;
      this.fondo = this.peli.backdrop_path;
      this.poster = this.peli.poster_path;
      this.generos = [...this.peli.genres];
      this.isFav = this.ss.checkFav(this.peli);
    });

    this.ss.getCast(this.id).subscribe((respuesta: ICast) => {
      this.actores = [...respuesta.cast];
    });
  }

  cerrar() {
    return this.modalCtrl.dismiss(null, "cancel");
  }

  toggleFav() {
    if (!this.ss.checkFav(this.peli)) this.ss.addToFavorites(this.peli);
    else this.ss.removeFromFavorites(this.peli);
    this.isFav = this.ss.checkFav(this.peli);
  }
}
