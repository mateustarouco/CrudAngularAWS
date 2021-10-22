import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {fromPromise} from "rxjs/internal-compatibility";
import {graphqlOperation} from "aws-amplify";
import {createTodo} from "../../../../graphql/mutations";
import {AmplifyService} from "aws-amplify-angular";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private amplifyService : AmplifyService) { }

  ngOnInit(): void {
  }
  insertItem = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null , [Validators.required])
  });

  submit(){
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(createTodo, {input: this.insertItem.value})))
      .subscribe(item=>{
        this.router.navigate(['/get'])
    },error =>{
        console.log(error.errors[0].message)
    })
  }

}
