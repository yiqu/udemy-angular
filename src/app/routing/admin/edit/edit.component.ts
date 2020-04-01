import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class AdminEditComponent implements OnInit {

  paramsObj: {} = {};
  currentId: string;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=> {
      this.currentId = res.get('id');
      res.keys.forEach((key) => {
        this.paramsObj[key] = res.get(key);
      })
    })
  }
}
