import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/404.component';
import { CompComponent } from './p1/comp.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirDeepComponent } from './directives-deep/deep.comp';
import { ServiceComponent } from './services/service.comp';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'components', component: CompComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'dir-deep', component: DirDeepComponent },
  { path: 'services', component: ServiceComponent },

  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
