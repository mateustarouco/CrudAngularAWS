import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

import {AutenticatedService} from "./autenticatedservice";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AutenticatedService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.autenticatedUser()
      .pipe(
        tap(resp => {
          if (!resp) {
            this.router.navigate(['/login']).then()
          }

        })
      )
  }
}

