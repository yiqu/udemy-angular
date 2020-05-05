import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Utilservice } from '../shared/util.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FirebaseSignUpResponse, FirebaseSignInResponse, FireUser } from './auth.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;
  infoFg: FormGroup;
  signInUpErrMessage: string;
  currentUser: FireUser;
  compDest$: Subject<any> = new Subject<any>();

  constructor(public fb: FormBuilder, public as: AuthService, public us: Utilservice,
    public router: Router) {
    this.infoFg = this.fb.group({
      id: new FormControl("kevinqu88@gmail.com", [Validators.required, Validators.email]),
      pw: new FormControl("123456", [Validators.required])
    });

    this.as.user$.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((u: FireUser) => {
      this.currentUser = u;
    });
  }

  ngOnInit() { }

  onLoginModeToggle() {
    this.signInUpErrMessage = null;
    this.isLoginMode = !this.isLoginMode;
    this.infoFg.reset({
      id: "kevinqu88@gmail.com",
      pw: "123456"
    });
  }

  onSubmit() {
    this.signInUpErrMessage = null;

    if (this.isLoginMode) {
      this.as.signInUser<FirebaseSignInResponse>(this.infoFg.value.id, this.infoFg.value.pw).subscribe(
        this.signUpInNext.bind(this), // not using arrow function will require 'bind' to 'this' if want to access 'this'
        this.signUpInError.bind(this),
        this.signUpInComplete.bind(this)
      );
    } else {
      this.as.signUpUser<FirebaseSignUpResponse>(this.infoFg.value.id, this.infoFg.value.pw).subscribe(
        (val) => this.signUpInNext(val),
        (err) => this.signUpInError(err),
        () => this.signUpInComplete()
      );
    }

  }

  resetForm() {
    this.infoFg.reset();
  }

  signUpInNext(val: HttpResponse<FirebaseSignInResponse> | HttpResponse<FirebaseSignUpResponse>) {
    console.log(val)
  }

  signUpInError(err) {
    this.signInUpErrMessage = err;
    this.resetForm();
  }

  signUpInComplete() {
    if (this.isLoginMode) {
      this.us.openSnackBar("You are now signed in!");
    } else {
      this.us.openSnackBar("User has been signed up!");
      this.infoFg.reset();
      this.isLoginMode = true;
    }
    this.router.navigate(['./', 'auth', 'welcome']);
  }

  onLogout() {
    this.as.onLogout();
  }
}
