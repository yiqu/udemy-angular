import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-mage',
  templateUrl: 'mage.component.html',
  styleUrls: ['./mage.component.css']
})

export class MageComponent implements OnInit {

  listOfIds: any[] = [];

  constructor(public router: Router, public route: ActivatedRoute) {
    this.listOfIds.push(...[1,2,3,4,5]);
  }

  ngOnInit() { }

  goHomeRelative() {
    this.router.navigate(['routing', 'priest']);
  }

  goHomeRelative2() {
    this.router.navigate(['mage']);
  }

  goHomeRelative3() {
    this.router.navigate(['mage'], {relativeTo: this.route});
  }
}
