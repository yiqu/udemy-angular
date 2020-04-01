import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-r-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.css', '../routing.component.css']
})

export class AdminComponent implements OnInit {

  classList: string[] = ['mage', 'priest', 'warrior'];
  staticData: any;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data: Data)=> {
      this.staticData = data;
    })
  }
}
