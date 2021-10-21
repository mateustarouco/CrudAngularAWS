import { Injectable } from '@angular/core';

import {getTodo, listTodos} from '../graphql/queries';
import {createTodo,updateTodo,deleteTodo} from '../graphql/mutations';
import {AmplifyService} from "aws-amplify-angular";
import {fromPromise} from "rxjs/internal-compatibility";
import {graphqlOperation} from "aws-amplify";
import {item} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class APIGraphQLService {

  constructor(private amplifyService: AmplifyService) { }

  newItem(item : item[]) : Promise<any>{
    return new Promise<any> ((resolve, reject)=>{
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(createTodo, {input: item}))).subscribe(item=>{
        resolve(item)
      },error => {
        reject(error)
      })
    })
  }
  teste(test : item[]){
    console.log(test)
  }

}
