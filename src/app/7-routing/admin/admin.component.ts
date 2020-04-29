import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { RoutingPracticeService } from '../routing.service';

@Component({
  selector: 'app-r-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.css', '../routing.component.css']
})

export class AdminComponent implements OnInit {

  classList: string[] = ['mage', 'priest', 'warrior'];
  staticData: any;
  loggedIn: boolean;

  constructor(public router: Router, public route: ActivatedRoute, public rs: RoutingPracticeService) {

  }

  ngOnInit() {
    this.route.data.subscribe((data: Data)=> {
      this.staticData = data;
    })
  }

  logIn(st: boolean) {
    this.loggedIn = st;
    this.rs.canSeeClassDetail = st;
  }
}
