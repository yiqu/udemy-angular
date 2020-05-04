import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Utilservice } from '../shared/util.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FirebaseSignUpResponse } from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;
  infoFg: FormGroup;
  signInUpErrMessage: any[] = [];

  constructor(public fb: FormBuilder, public as: AuthService, public us: Utilservice) {
    this.infoFg = this.fb.group({
      id: new FormControl("kevinqu88@gmail.com", [Validators.required, Validators.email]),
      pw: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() { }

  onLoginModeToggle() {
    this.isLoginMode = !this.isLoginMode;
    this.infoFg.reset({
      id: "kevinqu88@gmail.com"
    });
  }

  onSubmit() {
    console.log(this.infoFg.value, "mode:"+this.isLoginMode)
    this.signInUpErrMessage = [];

    if (this.isLoginMode) {

    } else {
      this.as.signUpUser<FirebaseSignUpResponse>(this.infoFg.value.id, this.infoFg.value.pw).subscribe(
        (val) => {
          console.log(val.body)
        },
        (err) => {
          this.us.openSnackBar("Error:" + err.error['error'].message)
          err.error.error.errors.forEach((val) => {
            this.signInUpErrMessage.push(val)
          })
        },
        () => {
          this.us.openSnackBar("User has been signed up!")
          this.infoFg.reset();
          this.isLoginMode = true;
        }
      );
    }

  }
}
