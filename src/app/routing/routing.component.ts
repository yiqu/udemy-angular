import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/models/nav-item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: 'routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent implements OnInit {

  guideList: NavItem[] = [];

  constructor(public router: Router, public route: ActivatedRoute) {
    this.guideList.push(
      new NavItem("Mage", "mage", "Mage Class", 0),
      new NavItem("Priest", "priest", "Priest Class", 0),
      new NavItem("Warrior", "warrior", "Warrior Class", 0),
      new NavItem("Admin Lounge", "admin", "Admin Lounge", 0)
    );
  }

  ngOnInit() { }

  goHome() {
    this.router.navigate(['./'], {relativeTo: this.route});
  }

  goClass(item: NavItem) {
    this.router.navigate([item.url], {relativeTo: this.route});
  }
}
