import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public category:any;
  constructor(private httpData:HttpClient) { }

  ngOnInit() {
    console.log(this.httpData);
    this.httpData.get("https://jsonplaceholder.typicode.com/albums").subscribe(
      (response)=>{
        this.category = response;
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

}
