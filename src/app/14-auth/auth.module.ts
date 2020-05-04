import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModuleBundle } from '../shared/material-bundle.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MaterialModuleBundle,
  ],

  exports: [
  ],

  declarations: [
    AuthComponent
  ],

  providers: [

  ],
})
export class AuthModule { }
