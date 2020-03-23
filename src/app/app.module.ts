import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleBundle } from './shared/material-bundle.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/404.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleBundle,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
