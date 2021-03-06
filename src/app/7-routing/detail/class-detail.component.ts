import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-r-detail',
  templateUrl: 'class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})

export class ClassDetailComponent implements OnInit {
  classId: string;
  valueObj;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((res: ParamMap) => {
      this.classId = res.get("id");
      this.valueObj = {};
      res.keys.forEach((key) => {
        this.valueObj[key] = res.get(key);
      })
    })
  }
}
