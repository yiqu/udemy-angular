import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Utilservice } from 'src/app/shared/util.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-f-template',
  templateUrl: 'template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateFormsComponent implements OnInit, AfterViewInit {

  @ViewChild("myForm")
  f: NgForm;

  fValues: unknown;
  formValid: boolean;

  formValues: unknown;
  wholeForm: NgForm;

  userAdminStatus: boolean = true;
  defaultEmail: string = "kevin@aol.com"

  genderList: string[] = ["Male", "Female"];

  constructor(public us: Utilservice) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.f.valueChanges.subscribe((val) => {
      this.fValues = val;
      this.formValid = this.f.valid;
    });
  }

  onFormSubmit(myForm: NgForm) {
    this.us.openSnackBar("Form Submitted!")
    console.log("Form: ", this.f);
    this.formValues = myForm.value;
    this.wholeForm = myForm;
  }

  suggestPw() {
    this.f.form.get("reqUserData").get("userPassword").setValue("abc");
  }
}
