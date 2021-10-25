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

  errorCode = ''
  userData: any
  public loading = false
  inConfirmation = false
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
    this.loading = true
    await fromPromise(Auth.signOut()).subscribe(item=>{
      this.loading = false
      this.errorCode = ''
      this.inConfirmation = false
      this.route.navigate(['/login'])
    }, error =>{
      this.loading = false

    })
}

  async signIn(username: string, password: string) {
    this.loading = true
    await fromPromise(Auth.signIn(username, password)).subscribe(item => {
      this.route.navigate([''])
      this.loading = false
      this.errorCode = ''
    }, error => {
      this.loading = false
      this.errorCode = 'erro ao Logar, verifique os dados e tente novamente'
    })
  }


  async signUpUser(username: string, password: string) {
    this.loading = true
    await fromPromise(Auth.signUp({
      username,
      password
    })).subscribe(item => {
      this.inConfirmation = true
      this.errorCode = ''
      this.loading = false
    }, error => {
      this.loading = false
      this.errorCode = 'erro ao criar usuario, verivique os dados e tente novamente'
    })
  }

  async confirmSignUp(username: string, code: string) {
    this.loading = true
    await fromPromise(Auth.confirmSignUp(username, code)).subscribe(item => {
      this.inConfirmation = false
      this.loading = false
      this.errorCode = ''
    }, error => {
      this.loading = false
      this.errorCode = 'codigo incorreto ou expirado'
    })
  }

}
