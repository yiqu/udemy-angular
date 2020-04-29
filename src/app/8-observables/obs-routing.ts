import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ObsComponent } from './obs.component';
import { CreateComponent } from './creation/create.component';
import { IntComponent } from './rxjs-interval-timer/int.component';

export const routes: Routes = [
  { path: "", component: ObsComponent,
    children:[
      { path: "", redirectTo: "create", pathMatch: "full" },
      { path: "create", component: CreateComponent },
      { path: "int-timer", component: IntComponent }
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
export class ObsRoutingModule {}
