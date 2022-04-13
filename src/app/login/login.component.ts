import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  msg: string;

  constructor(private router: Router, private userService: UserService) {
    this.username = '';
    this.password = '';
    this.msg = '';
  }

  ngOnInit() {}

  login() {
    if (this.username && this.password) {
      // most még csak statikus, hogy szerver oldalról ne kelljen a cors-al foglalkozni, a végleges logint a következő, teljes stack összeállítást bemutató órán nézzük meg
      if (this.username === 'user' && this.password === 'valami') {
        this.userService.loginUser();
        this.router.navigate(['/elso']);
      } else {
        this.msg = 'Hibás felhasználónév vagy jelszó!';
      }
    }
  }
}
