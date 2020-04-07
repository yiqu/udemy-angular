import { NgModule } from '@angular/core';
import { ObsComponent } from './obs.component';
import { ObsRoutingModule } from './obs-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModuleBundle } from '../shared/material-bundle.module';

@NgModule({
  imports: [
    ObsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModuleBundle

  ],

  exports: [

  ],

  declarations: [
    ObsComponent
  ],

  providers: [

  ],
})
export class ObsModule { }
