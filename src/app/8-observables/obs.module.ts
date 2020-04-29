import { NgModule } from '@angular/core';
import { ObsComponent } from './obs.component';
import { ObsRoutingModule } from './obs-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { CreateComponent } from './creation/create.component';
import { IntComponent } from './rxjs-interval-timer/int.component';
import { LandingComponent } from './landing/landing.component';
import { SnackModule } from '../shared/snackbar/snack.module';

@NgModule({
  imports: [
    ObsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModuleBundle,
    SnackModule
  ],

  exports: [

  ],

  declarations: [
    ObsComponent,
    LandingComponent,
    IntComponent,
    CreateComponent
  ],

  providers: [

  ],
})
export class ObsModule { }
