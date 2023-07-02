import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { IGenreMovies } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  favsPorGenero: IGenreMovies[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }

  constructor(private ss: ServicioService, private mod: ModalController) {
  }

  ngOnInit() {
    this.favsPorGenero = this.ss.returnFavsPorGenero();
  }

  refresh(event: any) {
    setTimeout(() => {
      this.ss.updateFavsPorGenero();
      this.favsPorGenero = this.ss.returnFavsPorGenero();
      event.target.complete();
    }, 10);
  };

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
