import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {updateTodo} from '../../../../graphql/mutations';
import {fromPromise} from "rxjs/internal-compatibility";
import {graphqlOperation} from "aws-amplify";
import {AmplifyService} from "aws-amplify-angular";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  idUser: any

  constructor(
    private router : Router,
    private amplifyService: AmplifyService,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(item => {
      this.idUser = item.id
      this.updateItem.controls['name'].setValue(item.name);
      this.updateItem.controls['description'].setValue(item.description);
    })
  }

  updateItem = this.formBuilder.group({
    name: new FormControl(null),
    description: new FormControl(null),
  });

  async updateUser() {
    await fromPromise(this.amplifyService.api().graphql(graphqlOperation(updateTodo,{input : {
        id : this.idUser,
        name: this.updateItem.value.name,
        description: this.updateItem.value.description
      }}
  )))
  .
    subscribe((item: any) => {
    this.router.navigate(['/get'])
    }, error => {
      console.log(error.errors[0].message)
    })
  }
}
