import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-r-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class AdminEditComponent implements OnInit {

  paramsObj: {} = {};
  currentId: string;
  detailName: string;
  canEdit: boolean;

  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=> {
      this.currentId = res.get('id');
      this.setName(this.currentId);

      res.keys.forEach((key) => {
        this.paramsObj[key] = res.get(key);
      })
    });

    this.route.queryParamMap.subscribe((res: ParamMap) => {
      this.setCanEdit(res.get("canEdit"));
    })
  }

  setName(id: string) {
    this.detailName = "Name" + id;
  }

  setCanEdit(edit) {
    this.canEdit = (edit === 'true');
  }

  toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
}
