import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';

const routes: Routes = [
  { path: '', component: NgrxComponent,
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
