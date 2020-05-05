import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoLogComponent } from './not-logged-in/nolog.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthKeyInterceptor } from './auth-interceptor';
import { CreateComponent } from './create/create.component';

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
    AuthComponent,
    WelcomeComponent,
    NoLogComponent,
    ProfileComponent,
    HomeComponent,
    CreateComponent
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthKeyInterceptor,
      multi: true
    }
  ],
})
export class AuthModule { }
