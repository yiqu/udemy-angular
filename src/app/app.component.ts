import { Component } from '@angular/core';
import { NavItem } from './shared/models/nav-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerTitle: string = "Udemy Angular Guide Practices";
  footerTitle: string = "KQ @2020";
  navList: NavItem[] = [];

  constructor() {
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
      new NavItem("Dynamic Loader", "dynamic", "Dynamically Load Components")
    );
  }
}
