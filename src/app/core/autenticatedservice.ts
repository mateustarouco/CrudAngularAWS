import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';
import {fromPromise} from "rxjs/internal-compatibility";
import {Observable, of} from "rxjs";
import {AmplifyService} from "aws-amplify-angular";
import {catchError, map} from "rxjs/operators";
import {Router} from "@angular/router";
import {installTempPackage} from "@angular/cli/utilities/install-package";


@Injectable({
  providedIn: 'root'
})
export class AutenticatedService {

  constructor(
    private route: Router,
    private amplifyService: AmplifyService) {
  }

  userData: any

  loadUser(user: any) {
    fromPromise(this.amplifyService.auth().currentAuthenticatedUser({bypassCache: true})).subscribe(resp => {
      const result: any = resp
    })
  }

  autenticatedUser(): Observable<boolean> {
    return fromPromise(this.amplifyService.auth().currentAuthenticatedUser({bypassCache: true}))
      .pipe(
        map(resp => {
          const user: any = resp;
          this.loadUser(user);
          return true
        }),
        catchError(error => {
          this.amplifyService.auth().signOut();
          this.route.navigate(['/login'])
          return of(false);
        })
      );
  }

async sigOut(){
    await fromPromise(Auth.signOut()).subscribe(item=>{
      this.route.navigate(['/login'])
    }, error =>{
      console.log(error)
    })
}

  async signIn(username: string, password: string) {
    await fromPromise(Auth.signIn(username, password)).subscribe(item => {
      this.route.navigate([''])
    }, error => {
      console.log(error)
    })
  }


  async signUpUser(username: string, password: string) {
    await fromPromise(Auth.signUp({
      username,
      password
    })).subscribe(item => {
      console.log(item)
    }, error => {
      console.log(error)
    })
  }

  async confirmSignUp(username: string, code: string) {
    await fromPromise(Auth.confirmSignUp(username, code)).subscribe(item => {
      console.log(item)
    }, error => {
      console.log(error)
    })
  }

}
