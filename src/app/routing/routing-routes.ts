import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { MageComponent } from './mage/mage.component';
import { PriestComponent } from './priest/priest.component';
import { WarComponent } from './warrior/war.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { ClassDetailComponent } from './detail/class-detail.component';
import { EndedComponent } from './ended/ended.component';
import { AdminClassComponent } from './admin/class/class.component';
import { AdminEditComponent } from './admin/edit/edit.component';

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

      { path: 'warrior', component: WarComponent, children: [
        { path: '', component: ClassDetailComponent},
        { path: ':id', component: ClassDetailComponent},
        { path: ':id/:name/ended', component: EndedComponent}, // ALERT: has to be above the more ambigious route!
        { path: ':id/:name', component: ClassDetailComponent}

      ]},

      { path: 'admin', component: AdminComponent, data: {location: "Admin"},
        children:[
          { path: ":className", component: AdminClassComponent, data: {location: "Class"},
            children: [
              { path: ':id/edit', component: AdminEditComponent}
            ]
          }
        ]
      }
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