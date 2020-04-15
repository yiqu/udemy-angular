import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpPracService } from '../http.service';
import { Utilservice } from 'src/app/shared/util.service';
import { Tweet } from '../http.component';

@Component({
  selector: 'app-h-c',
  templateUrl: 'create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  tweetFg: FormGroup;

  constructor(public fb: FormBuilder, public hs: HttpPracService, private us: Utilservice) {

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

  onSubmit() {
    console.log(this.tweetFg.value)
    if (this.tweetFg.valid) {
      const newTweet = new Tweet(this.tweetFg.get('userName').value, this.tweetFg.get('content').value,
        new Date().getTime());
      this.hs.postData<{name: string}>(newTweet).subscribe(
        (val) => {
          const bod = val.body;
          this.us.openSnackBar("Successfully posted your tweet! " + bod.name);
        },
        (err) => {
        },
        () => {
          this.hs.refreshClick$.next();
          this.tweetFg.reset();
        }
      )
    }
  }

  onReset() {
    this.tweetFg.reset();
  }

  createFormControl(value: any, disabled: boolean, validators: any[] = null, asyncValids: any[] = null) {
    let fc = new FormControl({
      value: value ? value : null,
      disabled: disabled
    }, validators, asyncValids);
    return fc;
}
}
