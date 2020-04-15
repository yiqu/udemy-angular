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
import { DirDeepComponent } from './directives-deep/deep.comp';
import { BasicHighlightDirective } from './directives-deep/highlight/highlight.dir';
import { BetterHighlightDirective } from './directives-deep/highlight/highlight-better.dir';
import { ListenHighlightDirective } from './directives-deep/highlight/listen-highlight-dir';
import { BindingHighlightDirective } from './directives-deep/highlight/binding.dir';
import { CustomHighlightDirective } from './directives-deep/highlight/custom-input.dir';
import { DropDownDirective } from './directives-deep/dropdown/dropdown.dir';
import { ServiceComponent } from './services/service.comp';
import { ActiveComponent } from './services/active/active.component';
import { InactiveComponent } from './services/inactive/inactive.component';
import { RoutingComponentModule } from './routing/routing.module';
import { CapitalizeDirective, MaxCharDirective } from './directives-deep/highlight/cap.dir';
import { PipePracComponent } from './pipes/pipe.component';
import { ListItemDisplayPipe, ListItemFilterDisplayPipe } from './pipes/pipes.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpPracComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './http/create/create.component';
import { DisplayComponent } from './http/display/display.component';
import { DateDisplayPipe } from './http/pipes.component';

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
    ControlComponent,
    DirDeepComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    ListenHighlightDirective,
    BindingHighlightDirective,
    CustomHighlightDirective,
    MaxCharDirective,
    CapitalizeDirective,
    DropDownDirective,
    ServiceComponent,
    InactiveComponent,
    ActiveComponent,
    PipePracComponent,
    ListItemDisplayPipe,
    ListItemFilterDisplayPipe,
    HttpPracComponent,
    DisplayComponent,
    CreateComponent,
    DateDisplayPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModuleBundle,
    ReactiveFormsModule,
    RouterModule,
    RoutingComponentModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    DatePipe, // built in pipe needs to be in providers
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
