import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { NgrxLandingComponent } from './landing/landing.component';
import { NgRx2Component } from './new-way/ngrx2.component';

const routes: Routes = [
  { path: '', component: NgrxComponent,
    children: [
      { path: ""},
      { path: 'landing', component: NgrxLandingComponent },
      { path: 'tweets', component: null },
      { path: 'new-way', component: NgRx2Component }
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
