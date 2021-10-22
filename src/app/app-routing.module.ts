import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {InsertComponent} from "./pages/crud/insert/insert.component";
import {ListComponent} from "./pages/crud/list/list.component";
import {DeletComponent} from "./pages/crud/delete/delet.component";
import {UpdateComponent} from "./pages/crud/update/update.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./core/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: PagesComponent
  },  {
    path: 'insert',
    canActivate: [AuthGuard],
    component: InsertComponent
  },{
    path: 'get',
    canActivate: [AuthGuard],
    component: ListComponent
  },{
    path: 'delete',
    canActivate: [AuthGuard],
    component: DeletComponent
  },{
    path: 'update',
    canActivate: [AuthGuard],
    component: UpdateComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
