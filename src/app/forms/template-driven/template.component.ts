import { Component, OnInit } from '@angular/core';
import { Utilservice } from 'src/app/shared/util.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-f-template',
  templateUrl: 'template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateFormsComponent implements OnInit {

  formValues: unknown;
  wholeForm: NgForm;

  constructor(public us: Utilservice) {

  }

  ngOnInit() {

  }

  onFormSubmit(myForm: NgForm) {
    this.us.openSnackBar("Form Submitted!")
    console.log(myForm)
    this.formValues = myForm.value;
    this.wholeForm = myForm;
  }
}
