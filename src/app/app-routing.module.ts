import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {InsertComponent} from "./pages/crud/insert/insert.component";
import {ListComponent} from "./pages/crud/list/list.component";
import {DeletComponent} from "./pages/crud/delete/delet.component";
import {UpdateComponent} from "./pages/crud/update/update.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },  {
    path: 'insert',
    component: InsertComponent
  },{
    path: 'get',
    component: ListComponent
  },{
    path: 'delete',
    component: DeletComponent
  },{
    path: 'update',
    component: UpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
