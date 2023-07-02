import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidebackdrop2',
  templateUrl: './slidebackdrop2.component.html',
  styleUrls: ['./slidebackdrop2.component.scss'],
})
export class Slidebackdrop2Component implements OnInit {

  @Input()
  pelis: IMovie[] = [];

  slideOpts = {
    slidesPerView: 1.3,
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
