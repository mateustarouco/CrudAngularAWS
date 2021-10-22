import { Component, OnInit } from '@angular/core';
import {AutenticatedService} from "../core/autenticatedservice";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private authService : AutenticatedService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.sigOut()
  }
}
