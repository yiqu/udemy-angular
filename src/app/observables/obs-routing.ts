import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ObsComponent } from './obs.component';

export const routes: Routes = [
  { path: "", component: ObsComponent }
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
export class ObsRoutingModule {}
