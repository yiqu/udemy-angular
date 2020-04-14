import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-h-c',
  templateUrl: 'create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  tweetFg: FormGroup;

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildTweetFormGroup();

  }

  buildTweetFormGroup() {
    this.tweetFg = this.fb.group({
      userName: this.createFormControl(null, false, [Validators.required]),
      content: this.createFormControl(null, false, [Validators.required])
    })
  }

  createFormControl(value: any, disabled: boolean, validators: any[] = null, asyncValids: any[] = null) {
    let fc = new FormControl({
      value: value ? value : null,
      disabled: disabled
    }, validators, asyncValids);
    return fc;
}
}
