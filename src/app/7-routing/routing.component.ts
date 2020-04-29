import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/models/nav-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingPracticeService } from './routing.service';

@Component({
  selector: 'app-routing',
  templateUrl: 'routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent implements OnInit {

  guideList: NavItem[] = [];
  loggedIn: boolean = false;

  constructor(public router: Router, public route: ActivatedRoute, public rs: RoutingPracticeService) {
    this.guideList.push(
      new NavItem("Mage", "mage", "Mage Class", 0),
      new NavItem("Priest", "priest", "Priest Class", 0),
      new NavItem("Warrior", "warrior", "Warrior Class", 0),
      new NavItem("Admin Lounge", "admin", "Admin Lounge", 0)
    );
  }

  ngOnInit() { }

  goHome() {
    this.router.navigate(['mage']);
  }

  goHomeRelative() {
    this.router.navigate(['mage'], {relativeTo: this.route});
  }

  goClass(item: NavItem) {
    this.router.navigate([item.url], {relativeTo: this.route});
  }

  logIn(status: boolean) {
    this.loggedIn = status;
    this.rs.setLoggedIn(status);
  }
}
