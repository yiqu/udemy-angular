
export interface TweetState {
  postedTweets: Tweet[];
}

export interface AppState {
  userTweets: TweetState
}

export class Tweet {
  constructor(public userName: string, public content: string,
    public date: number = 0,
    public id: string = null, public editing: boolean,
    public sendStatus: string) {

  }
}
