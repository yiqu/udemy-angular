import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoLogComponent } from './not-logged-in/nolog.component';
import { AdminFireGuard } from './auth-admin-guard';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent, canActivate: [AdminFireGuard]}, // can also use activechildren
      { path: 'profile', component: ProfileComponent, canActivate: [AdminFireGuard]},
      { path: 'home', component: HomeComponent },
      { path: 'nolog', component: NoLogComponent},
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
export class AuthRoutingModule {}
