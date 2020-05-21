import { FireUser } from 'src/app/14-auth/auth.model';

export interface TweetState {
  postedTweets: Tweet[];
}

export interface UserState {
  user: FireUser
}

export class Tweet {
  constructor(public userName: string, public content: string,
    public date: number = 0,
    public id: string = null, public editing: boolean,
    public sendStatus: string) {

  }
}
