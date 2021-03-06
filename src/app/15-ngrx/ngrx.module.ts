import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { NgrxComponent } from './ngrx.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { StoreModule } from '@ngrx/store';
import { NgRxComponentService } from './comp.service';
import { TweetEditorComponent } from './tweet-editor/editor.component';
import { appReducers } from './global-store/app.reducer';
import { NgrxLandingComponent } from './landing/landing.component';
import { NgRx2Component } from './new-way/ngrx2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleBundle,
    NgrxRoutingModule
  ],

  exports: [

  ],

  declarations: [
    NgrxComponent,
    TweetEditorComponent,
    NgrxLandingComponent,
    NgRx2Component
  ],

  providers: [
    NgRxComponentService
  ],
})
export class NgrxModule { }
