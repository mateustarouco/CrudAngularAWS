import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AutenticatedService} from "../core/autenticatedservice";
import {fromPromise} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errormessage = ''
  loading = false
  status = 0
  username : any
  constructor(private authService : AutenticatedService ,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm.controls['email'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }
  loginForm = this.formBuilder.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null , [Validators.required])
  });
  newUserForm = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null , [Validators.required])
  });
  confirmForm = this.formBuilder.group({
    code: new FormControl(null, [Validators.required]),
  });


  login(){
    this.loading = true
    fromPromise(this.authService.signIn(this.loginForm.value.email , this.loginForm.value.password )).subscribe(item =>{
      console.log(item)
      this.loading = false
    })
  }

  signUp(){
    this.authService.signUpUser(this.newUserForm.value.email ,this.newUserForm.value.password )
    this.username = this.newUserForm.value.email
    this.status = 2
  }

  confirmSignUp(){
    this.loading = true
    fromPromise(this.authService.confirmSignUp(this.username , this.confirmForm.value.code)).subscribe(item =>{
      this.loading = false
    })
  }
}
