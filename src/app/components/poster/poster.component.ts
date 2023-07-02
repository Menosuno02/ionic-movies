import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {

  @Input()
  pelis: IMovie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }
  constructor(private mod: ModalController) { }

  ngOnInit() { }

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
