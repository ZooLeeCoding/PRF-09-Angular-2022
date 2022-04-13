import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProbaGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // csak akkor engedélyezik a navigációt, amire rá lettek állítva, ha ez a funkció true-val tér vissza
    if (this.userService.getUser()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
