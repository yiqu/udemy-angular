import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleBundle } from './shared/material-bundle.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/404.component';
import { DataBindingComponent } from './2-data-binding/data-binding.component';
import { DirectiveComponent } from './3-directive/directive.component';
import { EventBindingComponent } from './4-event-binding/event-binding.component';
import { EvenComponent } from './4-event-binding/even/even.comp';
import { ControlComponent } from './4-event-binding/game-control/control.comp';
import { OddComponent } from './4-event-binding/odd/odd.comp';
import { DirDeepComponent } from './5-directives-deep/deep.comp';
import { BasicHighlightDirective } from './5-directives-deep/highlight/highlight.dir';
import { BetterHighlightDirective } from './5-directives-deep/highlight/highlight-better.dir';
import { ListenHighlightDirective } from './5-directives-deep/highlight/listen-highlight-dir';
import { BindingHighlightDirective } from './5-directives-deep/highlight/binding.dir';
import { CustomHighlightDirective } from './5-directives-deep/highlight/custom-input.dir';
import { DropDownDirective } from './5-directives-deep/dropdown/dropdown.dir';
import { ServiceComponent } from './6-services/service.comp';
import { ActiveComponent } from './6-services/active/active.component';
import { InactiveComponent } from './6-services/inactive/inactive.component';
import { RoutingComponentModule } from './7-routing/routing.module';
import { CapitalizeDirective, MaxCharDirective } from './5-directives-deep/highlight/cap.dir';
import { PipePracComponent } from './10-pipes/pipe.component';
import { ListItemDisplayPipe, ListItemFilterDisplayPipe } from './10-pipes/pipes.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpPracComponent } from './11-http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateComponent } from './11-http/create/create.component';
import { DisplayComponent } from './11-http/display/display.component';
import { DateDisplayPipe } from './11-http/pipes.component';
import { AnimationPracComponent } from './13-animation/animation.component';
import { DialogEditComponent } from './11-http/dialog/dialog.component';
import { CheckForLoadingInterceptor } from './11-http/loading-interceptor.service';
import { IsLoadingService } from './11-http/loading.service';
import { CompComponent } from './1-components/comp.component';
import { SuccessComponent } from './1-components/success/success.component';
import { WarningComponent } from './1-components/warning/warning.component';
import { AuthModule } from './14-auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './15-ngrx/global-store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './15-ngrx/auth/auth.effects';

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
    DateDisplayPipe,
    AnimationPracComponent,
    DialogEditComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModuleBundle,
    ReactiveFormsModule,
    RouterModule,
    RoutingComponentModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot(appReducers),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule
  ],

  providers: [
    DatePipe, // built in pipe needs to be in providers
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CheckForLoadingInterceptor,
      multi: true,
      deps: [IsLoadingService]
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
