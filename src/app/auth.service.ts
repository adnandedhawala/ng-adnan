import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkKey() {
    if (localStorage.getItem("xyz") === null) {
      return false;
    } else {
      return true;

    }
  }

  storeKey(data) {
    localStorage.setItem("xyz", data.userName);
    localStorage.setItem("email", data.userEmail);
    localStorage.setItem("id", data.id);
    localStorage.setItem("mobile", data.userMobile);
  }

  deleteKey() {
    localStorage.removeItem("xyz");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("mobile");
  }
  getName(){
    return localStorage.getItem("xyz");
  }
}
