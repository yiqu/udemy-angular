import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { NgrxLandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: NgrxComponent,
    children: [
      { path: ""},
      { path: 'landing', component: NgrxLandingComponent },
      { path: 'tweets', component: null }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class NgrxRoutingModule {}
