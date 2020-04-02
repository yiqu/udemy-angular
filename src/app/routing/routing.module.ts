import { NgModule } from '@angular/core';
import { RoutingComponent } from './routing.component';
import { RoutingRoutingModule } from './routing-routes';
import { AdminComponent } from './admin/admin.component';
import { MageComponent } from './mage/mage.component';
import { PriestComponent } from './priest/priest.component';
import { WarComponent } from './warrior/war.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ClassDetailComponent } from './detail/class-detail.component';
import { PriestModule } from './priest/priest.module';
import { ClassDetailModule } from './detail/detail.module';
import { EndedComponent } from './ended/ended.component';
import { AdminClassComponent } from './admin/class/class.component';
import { AdminEditComponent } from './admin/edit/edit.component';
import { DialogConfirmComponent } from '../shared/dialog/dialog.component';
import { MaterialModuleBundle } from '../shared/material-bundle.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //PriestModule,
    ClassDetailModule,
    MaterialModuleBundle,
    RoutingRoutingModule
  ],

  exports: [],

  declarations: [
    RoutingComponent,
    AdminComponent,
    //PriestComponent,
    MageComponent,
    WarComponent,
    EndedComponent,
    AdminClassComponent,
    AdminEditComponent,
    LandingComponent,
    DialogConfirmComponent
  ],

  providers: [],
})
export class RoutingComponentModule { }
