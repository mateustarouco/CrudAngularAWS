import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from "./pages.component";
import {InsertComponent} from "./crud/insert/insert.component";



@NgModule({
  declarations: [
    PagesComponent,
    InsertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
