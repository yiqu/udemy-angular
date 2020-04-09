import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/models/nav-item.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-f-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  compDest$: Subject<any> = new Subject<any>();
  tabLinks: NavItem[] = [];
  activeLink: NavItem;


  constructor() {
    this.tabLinks.push(
      new NavItem("Template Forms", "template-forms", "creating template driven forms"),
      new NavItem("Reactive Froms", "reactive-forms", "creating reactive forms")
    );
    this.activeLink = this.tabLinks[0];
  }

  ngOnInit() {

  }
}
