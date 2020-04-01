import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';

@Component({
  selector: 'app-r-admin-class',
  templateUrl: 'class.component.html',
  styleUrls: ['./class.component.css', '../../routing.component.css']
})

export class AdminClassComponent implements OnInit {

  currentClass: string;
  classIds: number[] = [1,2,3];
  staticData: any;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((res: ParamMap) => {
      this.currentClass = res.get('className');
    });

    this.route.data.subscribe((data: Data)=> {
      this.staticData = data;
    })
  }
}
