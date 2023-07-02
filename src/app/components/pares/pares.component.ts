import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pares',
  templateUrl: './pares.component.html',
  styleUrls: ['./pares.component.scss'],
})
export class ParesComponent implements OnInit {

  @Input()
  pelis: IMovie[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 0.1,
    freeMode: true,
    spaceBetween: -10
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

  onClick() {
    this.cargarMas.emit();
  }

}
