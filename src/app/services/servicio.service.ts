import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { IMovies, IMovieDetailed, ICast, IGenres, IGenre, IGenreMovies } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';

const urlPelis = environment.apiurl + "discover/movie?language=es&include_image_language=es"
const urlPeli = environment.apiurl + "movie/"
const urlBuscar = environment.apiurl + "search/movie?"
const urlGenero = environment.apiurl + "genre/movie/list?";


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  static pagePopularity: number = 0;
  public static favoritas: IMovieDetailed[] = [];
  public static favsPorGenero: IGenreMovies[] = [];

  constructor(private http: HttpClient, public s: Storage) {
    s.create();
    s.set("favs", ServicioService.favoritas);
  }

  getMovies() {
    return this.http.get<IMovies>(urlPelis + "&primary_release_date.gte=2014-01-01&primary_release_date.lte=2014-12-31&api_key=" + environment.apikey);
  }

  getRecientes() {
    return this.http.get<IMovies>(urlPelis + "&primary_release_date.lte=2022-01-01&api_key=" + environment.apikey);
  }

  getPopulares() {
    ServicioService.pagePopularity++;
    let query = urlPelis + "&sort_by=popularity.desc&page=" + ServicioService.pagePopularity + "&api_key=" + environment.apikey + "&language=es";
    return this.http.get<IMovies>(query);
  }

  getDetailedMovie(pid: string) {
    return this.http.get<IMovieDetailed>(urlPeli + pid + "?&language=es&include_image_language=es&api_key=" + environment.apikey)
  }

  getCast(pid: string) {
    return this.http.get<ICast>(urlPeli + pid + "/credits?&language=es&include_image_language=es&api_key=" + environment.apikey)
  }

  buscarPeli(query: string) {
    return this.http.get<IMovies>(urlBuscar + "language=es&include_image_language=es&api_key=" + environment.apikey + "&query=" + query)
  }

  checkFav(peli: IMovieDetailed) {
    return ServicioService.favoritas.map(favorite => favorite.id).includes(peli.id);
  }

  toggleFav(peli: IMovieDetailed): boolean {
    if (ServicioService.favoritas.indexOf(peli) == -1) {
      ServicioService.favoritas.push(peli);
      this.s.set("favs", ServicioService.favoritas);
      return true;
    }
    else {
      ServicioService.favoritas = ServicioService.favoritas.filter((item) => item != peli);
      this.s.set("favs", ServicioService.favoritas);
      return false;
    }
  }

  addToFavorites(peli: IMovieDetailed) {
    ServicioService.favoritas.push(peli);
    this.s.set("favs", ServicioService.favoritas);
  }

  removeFromFavorites(peli: IMovieDetailed) {
    const index = ServicioService.favoritas.findIndex((m) => m.id === peli.id);
    if (index !== -1) ServicioService.favoritas.splice(index, 1);
    this.s.set("favs", ServicioService.favoritas);
  }

  getGenres() {
    return this.http.get<IGenres>(urlGenero + "language=es&include_image_language=es&api_key=" + environment.apikey);
  }

  updateFavsPorGenero() {
    ServicioService.favsPorGenero = [];
    this.getGenres().subscribe((respuesta: IGenres) => {
      let genres = [...respuesta.genres];
      genres.forEach((g) => {
        let gm: IGenreMovies = { genre: g.name, movies: [] };
        ServicioService.favsPorGenero.push(gm);
      });
      ServicioService.favoritas.forEach((fav) => {
        for (let k = 0; k < fav.genres.length; k++) {
          for (let m = 0; m < ServicioService.favsPorGenero.length; m++) {
            if (fav.genres[k].name == ServicioService.favsPorGenero[m].genre) ServicioService.favsPorGenero[m].movies.push(fav);
          }
        }
      })
    });
    this.s.set("favs", ServicioService.favoritas);
    this.s.set("favsPorGénero", ServicioService.favsPorGenero);
  }

  returnFavsPorGenero() {
    return ServicioService.favsPorGenero;
  }
}
