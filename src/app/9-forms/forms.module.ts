import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsComponentRoutingModule } from './forms-routing';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { ReactiveFormsComponent } from './reactive/reactive.component';
import { TemplateFormsComponent } from './template-driven/template.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModuleBundle,
    FormsComponentRoutingModule
  ],

  exports: [

  ],

  declarations: [
    FormsComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent
  ],

  providers: [

  ],
})
export class FormsComponentModule { }
