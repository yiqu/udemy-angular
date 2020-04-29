import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NewUserDynamicComponent } from './new-user/new-user.component';
import { UserPlaceHolderDirective } from './placeholder.dir';
import { Utilservice } from '../shared/util.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: 'dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})

export class DynamicComponent implements OnInit, OnDestroy {

  aUser = {
    name: "John",
    age: (Math.random()*100).toFixed(0)
  }

  @ViewChild(UserPlaceHolderDirective)
  userHost: UserPlaceHolderDirective;

  compDest: Subject<any> = new Subject<any>();

  constructor(public cfr: ComponentFactoryResolver, public us: Utilservice) {

  }

  ngOnInit() { }

  addNewUser() {
    const factory = this.cfr.resolveComponentFactory(NewUserDynamicComponent);
    const hostContainerRef = this.userHost.vcr;
    hostContainerRef.clear();
    const compRef = hostContainerRef.createComponent(factory);
    compRef.instance.data = {name: "Kevin", age: 100};

    compRef.instance.alertOnUser.pipe(
      takeUntil(this.compDest)
    )
    .subscribe((val: string) => {
      hostContainerRef.clear();
      this.us.openSnackBar("Clicked on: " + val)
    })
  }

  ngOnDestroy() {
    this.compDest.next();
  }
}
