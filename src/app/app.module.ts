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
import { CompComponent } from './p1/comp.component';
import { WarningComponent } from './p1/warning/warning.component';
import { SuccessComponent } from './p1/success/success.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EvenComponent } from './event-binding/even/even.comp';
import { ControlComponent } from './event-binding/game-control/control.comp';
import { OddComponent } from './event-binding/odd/odd.comp';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    CompComponent,
    SuccessComponent,
    WarningComponent,
    DataBindingComponent,
    DirectiveComponent,
    EventBindingComponent,
    OddComponent,
    EvenComponent,
    ControlComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
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
