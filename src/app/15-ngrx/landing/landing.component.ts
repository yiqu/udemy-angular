import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/14-auth/auth.service';

@Component({
  selector: 'app-ngrx-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class NgrxLandingComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute, public as: AuthService) { }

  ngOnInit() {
    this.as.getTweets().subscribe((res) => {
      console.log(res)
    })
  }

  goAnother() {
    this.router.navigate(['./', 'another'], {relativeTo: this.route})
  }
}
