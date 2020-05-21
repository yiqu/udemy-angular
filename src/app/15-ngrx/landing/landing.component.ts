import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ngrx-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class NgrxLandingComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() { }

  goAnother() {
    this.router.navigate(['./', 'another'], {relativeTo: this.route})
  }
}
