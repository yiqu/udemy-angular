import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-mage',
  templateUrl: 'mage.component.html',
  styleUrls: ['./mage.component.css']
})

export class MageComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) { }

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
