import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import {PagesComponent} from "./pages.component";
import {InsertComponent} from "./crud/insert/insert.component";
import {RouterModule} from "@angular/router";
import { ListComponent } from './crud/list/list.component';
import {MatTableModule} from "@angular/material/table";
import { DeletComponent } from './crud/delete/delet.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { UpdateComponent } from './crud/update/update.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AmplifyService } from 'aws-amplify-angular';



@NgModule({
  declarations: [
    PagesComponent,
    InsertComponent,
    ListComponent,
    DeletComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],providers:[
    MatDialog,
    AmplifyService
  ]
})
export class PagesModule { }
