import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utilservice } from 'src/app/shared/util.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/11-http/http.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-h-c',
  templateUrl: 'create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  @Input()
  editMode: boolean = false;

  @Input()
  tweetData: Tweet;

  @Output()
  editDone: EventEmitter<any> = new EventEmitter<any>();

  tweetFg: FormGroup;
  loading: boolean = false;

  constructor(public fb: FormBuilder, public as: AuthService, private us: Utilservice) {

  }

  ngOnInit() {
    if (this.editMode && this.tweetData) {
      this.buildTweetFormGroup(this.tweetData);
    } else if (this.tweetData) {
      this.buildTweetFormGroup(this.tweetData);
    }
    else {
      this.buildTweetFormGroup();
    }
  }

  buildTweetFormGroup(t?: Tweet) {
    const userName = t? t.userName : null;
    const content = t? t.content : null;

    this.tweetFg = this.fb.group({
      userName: this.createFormControl(userName, false, [Validators.required]),
      content: this.createFormControl(content, false, [Validators.required])
    });

  }

  onSubmit() {
    if (this.tweetFg.valid) {
      this.loading = true;
      const idOfTweet = this.tweetData ? this.tweetData.id : null;
      const newTweet = new Tweet(this.tweetFg.get('userName').value, this.tweetFg.get('content').value,
        new Date().getTime(), idOfTweet);

      if (this.editMode) {
        this.as.updateData<Tweet>('tweets2.json', newTweet).subscribe(
          (val) => {
            const bod = val.body;
            this.us.openSnackBar("Successfully updated your tweet! " + bod.id);
          },
          (err) => {
            this.loading = false;
          },
          () => {
            this.loading = false;
            this.as.refreshClick$.next();
            this.editDone.emit(true);
          }
        )
      } else {
        let baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
        this.as.postData<{name: string}>(baseUrl + 'tweets2.json',newTweet).subscribe(
          (val) => {
            const bod = val.body;
            this.us.openSnackBar("Successfully posted your tweet! " + bod.name);
          },
          (err: HttpErrorResponse) => {
            this.loading = false;
          },
          () => {
            this.loading = false;
            this.as.refreshClick$.next();
            this.tweetFg.reset({
              userName: this.tweetData.userName
            });
          }
        );
      }
    }
  }

  onSubmit2() {
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
