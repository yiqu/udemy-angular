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
    );
  }
}
