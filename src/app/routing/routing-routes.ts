import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { MageComponent } from './mage/mage.component';
import { PriestComponent } from './priest/priest.component';
import { WarComponent } from './warrior/war.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { ClassDetailComponent } from './detail/class-detail.component';

const routes: Routes = [
  { path: 'routing', component: RoutingComponent,
    children: [
      { path: '', component: LandingComponent},
      { path: 'mage', component: MageComponent },
      //{ path: 'mage/mage', component: LandingComponent }, //<- this will catch mage/mage before the :id catches it and treats it like an id
      { path: 'mage/:id', component: ClassDetailComponent },
      { path: 'priest',
        loadChildren: () => import('./priest/priest.module').then(m => m.PriestModule)
      },
      { path: 'warrior', component: WarComponent },
      { path: 'admin', component: AdminComponent }
    ]
  },
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
export class RoutingRoutingModule {}
