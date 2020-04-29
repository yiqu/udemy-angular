import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoadingService {

  isLoading: boolean = true;

  constructor() {
  }

  setLoading(s: boolean) {
    this.isLoading = s;
  }


}
