import { Component, OnInit } from '@angular/core';
import { NavItem } from './shared/models/nav-item.model';
import { AuthService } from './14-auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headerTitle: string = "Udemy Angular Guide Practices";
  footerTitle: string = "KQ @2020";
  navList: NavItem[] = [];

  constructor(public as: AuthService) {
    this.navList.push(
      new NavItem("Components", "components", "Component display and styling"),
      new NavItem("Data Binding", "data-binding", "Data binding"),
      new NavItem("Directives", "directives", "Built in directives"),
      new NavItem("Event Binding", "event-binding", "Property and Event Binding, View Encap."),
      new NavItem("Directives Deep Dive", "dir-deep", "Directives Deep Dive"),
      new NavItem("Services", "services", "Service Injection"),
      new NavItem("Routing", "routing", "Routing"),
      new NavItem("Observables", "observables", "Observables"),
      new NavItem("Forms", "forms", "Angular Forms"),
      new NavItem("Pipes", "pipes", "Pipes Creation"),
      new NavItem("HTTP", "http", "HTTP Requests"),
      new NavItem("Animation", "animate", "Angular Animation"),
      new NavItem("Dynamic Loader", "dynamic", "Dynamically Load Components"),
      new NavItem("Authentication", "auth", "Add auth. to the app."),
      new NavItem("NgRx", "ngrx", "NgRx Practice"),
      new NavItem("RxJs", "rxjs", "RxJs Practice")
    );
  }

  ngOnInit() {
    this.as.tryAutoLogin();
  }
}
