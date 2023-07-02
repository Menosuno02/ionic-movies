import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { PosterComponent } from './poster/poster.component';
import { Slidebackdrop2Component } from './slidebackdrop2/slidebackdrop2.component';
import { ParesComponent } from './pares/pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [Slidebackdrop2Component, PosterComponent, ParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ], exports: [Slidebackdrop2Component, PosterComponent, ParesComponent, DetalleComponent]
})
export class ComponentsModule { }
