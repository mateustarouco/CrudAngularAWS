import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {InsertComponent} from "./pages/crud/insert/insert.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'insert',
    component: InsertComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
