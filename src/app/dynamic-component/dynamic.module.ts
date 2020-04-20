import { NgModule } from '@angular/core';

import { DynamicComponent } from './dynamic.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicComponentRoutingModule } from './dynamic-routing.module';
import { NewUserDynamicComponent } from './new-user/new-user.component';
import { UserPlaceHolderDirective } from './placeholder.dir';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicComponentRoutingModule
  ],
  exports: [],
  declarations: [
    DynamicComponent,
    NewUserDynamicComponent,
    UserPlaceHolderDirective
  ],
  providers: [],
})
export class DynamicComponentModule { }
