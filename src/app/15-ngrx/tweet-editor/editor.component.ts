import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../rx-store/models';

@Component({
  selector: 'app-ngrx-t-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class TweetEditorComponent implements OnInit {

  @Input()
  twee: Tweet;

  @Output()
  onTSave: EventEmitter<Tweet> = new EventEmitter<Tweet>();

  tweetContent: string;

  constructor() {

  }

  ngOnInit() {
    this.tweetContent = this.twee.content;
  }

  onTweetSave() {
    this.onTSave.emit(new Tweet(
      this.twee.userName, this.tweetContent, new Date().getTime(),
      this.twee.id, this.twee.editing, this.twee.sendStatus
    ))
  }
}
