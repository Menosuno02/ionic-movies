import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';
import { IMovie, IMovies } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  buscador: FormControl
  pelis: IMovie[] = [];

  slideOpts = {
    slidesPerView: 2,
    freeMode: true
  }

  constructor(private ss: ServicioService, private mod: ModalController) {
    this.buscador = new FormControl("");
  }

  buscar() {
    this.ss.buscarPeli(this.buscador.value).subscribe((respuesta: IMovies) => {
      this.pelis = [...respuesta.results];
    });
  }

  async verDetalle(id: string) {
    const ventanaModal = await this.mod.create(
      {
        component: DetalleComponent,
        componentProps: { id }
      }
    );
    ventanaModal.present();
  }

}
