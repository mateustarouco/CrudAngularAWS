import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeletComponent} from "../delete/delet.component";

import {AmplifyService} from 'aws-amplify-angular';
import {API, graphqlOperation} from 'aws-amplify';
import {fromPromise} from "rxjs/internal-compatibility";
import {getTodo, listTodos} from '../../../../graphql/queries';
import {createTodo,updateTodo,deleteTodo} from '../../../../graphql/mutations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private amplifyService: AmplifyService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListItens()
  }

  dataSource: any[] = []
  displayedColumns: string[] = ['position', 'name', 'description' , 'symbol'];



  openDialog(item : any): void {
    const dialogRef = this.dialog.open(DeletComponent, {
      width: '450px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListItens()
    });
  }


   async getListItens(){
     await fromPromise(this.amplifyService.api().graphql(graphqlOperation(listTodos)))
       .subscribe((item : any)=>{
         this.dataSource = item.data.listTodos.items
       },error =>{
         console.log(error.errors[0].message)
       })
  }
}
