import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, interval, timer } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { NavItem } from '../shared/models/nav-item.model';

@Component({
  selector: 'app-o',
  templateUrl: 'obs.component.html',
  styleUrls: ['./obs.component.css']
})

export class ObsComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  tabLinks: NavItem[] = [];
  activeLink: NavItem;

  constructor() {

  }

  ngOnInit() {
    this.tabLinks.push(
      new NavItem("Creation", "create", "creating observable from scratch"),
      new NavItem("Rxjs/Interval | Timer", "int-timer", "rxjs interval and timer")
    );
    this.activeLink = this.tabLinks[0];
  }

  ngOnDestroy() {
  }

}
