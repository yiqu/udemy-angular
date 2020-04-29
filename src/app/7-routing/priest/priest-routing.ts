import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassDetailComponent } from '../detail/class-detail.component';
import { PriestComponent } from './priest.component';

const routes: Routes = [
  { path: '', component: PriestComponent,
    children: [
      { path: '', component: ClassDetailComponent },
      { path: ':id', component: ClassDetailComponent },
  ]},

]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PriestDetailRoutingModule {}
