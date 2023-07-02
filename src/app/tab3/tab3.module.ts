import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { Tab1Page } from '../tab1/tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
