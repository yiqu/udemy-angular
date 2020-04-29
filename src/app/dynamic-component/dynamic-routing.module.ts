import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

export const routes: Routes = [
  { path: "", component: DynamicComponent }
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
export class DynamicComponentRoutingModule {}
