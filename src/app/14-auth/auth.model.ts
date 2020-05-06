export class FirebaseSignUpRestRequestBody {
  constructor(public email: string, public password: string,
    public returnSecureToken: boolean = true) {

  }
}

export interface FirebaseSignUpResponse {
  idToken:	string	//A Firebase Auth ID token for the newly created user.
  email:	string	//The email for the newly created user.
  refreshToken:	string	//A Firebase Auth refresh token for the newly created user.
  expiresIn:	string	//The number of seconds in which the ID token expires.
  localId:	string //The uid of the newly created user.
}

export interface FirebaseSignInResponse {
  idToken:	string	//A Firebase Auth ID token for the newly created user.
  email:	string	//The email for the newly created user.
  refreshToken:	string	//A Firebase Auth refresh token for the newly created user.
  expiresIn:	string	//The number of seconds in which the ID token expires.
  localId:	string //The uid of the newly created user.
  registered: boolean
}


export class FireUser {
  constructor(
    private _displayName: string,
    public email: string,
    public localId: string,  //local id
    public refreshToken: string,
    public registered: boolean,
    private _token: string,
    public _tokenExpireDate: Date) {

    }

    get token(): string {
      if (this._tokenExpireDate && this._tokenExpireDate > new Date()) {
        return this._token;
      }
      return null;
    }

    get displayName(): string {
      return this._displayName ? this._displayName : this.email;
    }
}
