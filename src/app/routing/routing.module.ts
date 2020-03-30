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

@NgModule({
  imports: [
    RoutingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports: [],

  declarations: [
    RoutingComponent,
    AdminComponent,
    PriestComponent,
    MageComponent,
    WarComponent,
    LandingComponent
  ],

  providers: [],
})
export class RoutingComponentModule { }
