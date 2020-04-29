import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/404.component';
import { DataBindingComponent } from './2-data-binding/data-binding.component';
import { DirectiveComponent } from './3-directive/directive.component';
import { EventBindingComponent } from './4-event-binding/event-binding.component';
import { DirDeepComponent } from './5-directives-deep/deep.comp';
import { ServiceComponent } from './6-services/service.comp';
import { PipePracComponent } from './10-pipes/pipe.component';
import { HttpPracComponent } from './11-http/http.component';
import { AnimationPracComponent } from './13-animation/animation.component';
import { CompComponent } from './1-components/comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'components', component: CompComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'dir-deep', component: DirDeepComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'observables',
    loadChildren: () => import('./8-observables/obs.module').then(m => m.ObsModule)
  },
  { path: 'forms',
    loadChildren: () => import('./9-forms/forms.module').then(m => m.FormsComponentModule)
  },
  { path: 'dynamic',
    loadChildren: () => import('./12-dynamic-component/dynamic.module').then(m => m.DynamicComponentModule)
  },
  { path: 'pipes', component: PipePracComponent },
  { path: 'http', component: HttpPracComponent },
  { path: 'animate', component: AnimationPracComponent },
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
