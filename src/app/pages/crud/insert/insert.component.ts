import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {APIGraphQLService} from "../../../../service/apigraph-qlservice";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private aPIGraphQLService: APIGraphQLService) { }

  ngOnInit(): void {
  }
  insertItem = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null , [Validators.required]),
  });

  submit(){
    this.aPIGraphQLService.newItem(this.insertItem.value).then(item =>{
      console.log(item)
      this.router.navigate(['/get'])
    },error =>{
      console.log(error)
    })

  }

}
