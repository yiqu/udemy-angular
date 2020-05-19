import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { NgrxComponent } from './ngrx.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { StoreModule } from '@ngrx/store';
import { UserTweetsReducer } from './rx-store/tweets.reducer';
import { NgRxComponentService } from './comp.service';
import { TweetEditorComponent } from './tweet-editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleBundle,
    StoreModule.forRoot({
      userTweets: UserTweetsReducer
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    NgrxRoutingModule
  ],

  exports: [

  ],

  declarations: [
    NgrxComponent,
    TweetEditorComponent
  ],

  providers: [
    NgRxComponentService
  ],
})
export class NgrxModule { }
