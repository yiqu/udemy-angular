import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/models/nav-item.model';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-f-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  compDest$: Subject<any> = new Subject<any>();
  tabLinks: NavItem[] = [];
  activeLink: NavItem;


  constructor(public router: Router, public route: ActivatedRoute) {
    this.tabLinks.push(
      new NavItem("Template Forms", "template-forms", "creating template driven forms"),
      new NavItem("Reactive Froms", "reactive-forms", "creating reactive forms")
    );

  }

  ngOnInit() {
    const segs = this.router.url.split("/");
    const last = segs[segs.length-1];
    const current: number = this.tabLinks.findIndex((link: NavItem) => {
      return link.url === last;
    });

    if (current > -1) {
      this.activeLink = this.tabLinks[current];
    }
  }
}
