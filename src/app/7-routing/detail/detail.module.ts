import { NgModule } from '@angular/core';

import { ClassDetailComponent } from './class-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ClassDetailComponent
  ],
  declarations: [ClassDetailComponent],
  providers: [],
})
export class ClassDetailModule { }
