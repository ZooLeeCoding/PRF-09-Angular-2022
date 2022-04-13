import { Injectable } from '@angular/core';

// frontend alapon érdemes a user objektumot úgy tárolni, hogy az a felhasználó számára ne legyen kiolvasható, emiatt a sessionStorage, localStorage ilyesmire nem feltétlenül célszerű. Jogosultsági szintet is itt érdemes kezelni.
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userLogin = false;
  constructor() {}

  loginUser() {
    this.userLogin = true;
  }

  getUser() {
    return this.userLogin;
  }
}
