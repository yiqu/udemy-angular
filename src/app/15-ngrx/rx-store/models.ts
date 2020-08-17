import { FireUser } from 'src/app/14-auth/auth.model';

export interface TweetState {
  postedTweets: Tweet[];
  loading: boolean;
}

export interface UserState {
  user: FireUser;
  loading: boolean;
  error: any;
}

export class Tweet {
  constructor(public userName: string, public content: string,
    public date: number = 0,
    public id: string = null, public editing: boolean,
    public sendStatus: string) {

  }
}

export interface ICarState {
  carStarted: boolean;
  driver: string;
  carStartedDate: number;
}
