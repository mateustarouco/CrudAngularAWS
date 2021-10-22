import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AmplifyService} from "aws-amplify-angular";
import {deleteTodo} from '../../../../graphql/mutations';
import {fromPromise} from "rxjs/internal-compatibility";
import {graphqlOperation} from "aws-amplify";
import {Router} from "@angular/router";



@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.scss']
})
export class DeletComponent implements OnInit {



  constructor(
    private router : Router,
    private amplifyService : AmplifyService,
    public dialogRef: MatDialogRef<DeletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit(): void {
  }

  async confirm(){
    await fromPromise(this.amplifyService.api().graphql(graphqlOperation(deleteTodo , {input : {
      id : this.data.id
      }})))
      .subscribe((item : any)=>{
        this.dialogRef.close()
      },error =>{
        console.log(error.errors[0].message)
      })
  }
}
