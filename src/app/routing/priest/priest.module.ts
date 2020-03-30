import { NgModule } from '@angular/core';

import { PriestComponent } from './priest.component';
import { PriestDetailRoutingModule } from './priest-routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassDetailComponent } from '../detail/class-detail.component';
import { ClassDetailModule } from '../detail/detail.module';

@NgModule({
  imports: [
    PriestDetailRoutingModule,
    ClassDetailModule,
    CommonModule,
    FormsModule
  ],

  exports: [
  ],

  declarations: [
    PriestComponent,
  ],

  providers: [],
})
export class PriestModule { }
