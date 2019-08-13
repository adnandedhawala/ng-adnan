import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public category:any;
  public brand:any;

  constructor(private httpData:HttpClient) { }

  ngOnInit() {
    // console.log(this.httpData);
    this.httpData.get("http://localhost:3000/category").subscribe(
      (response)=>{
        // console.log(response);
        this.category = response;
      },
      (error)=>{
        console.log("Error");
      }
    );

    this.httpData.get("http://localhost:3000/brand").subscribe(
      (response)=>{
        console.log(response);
        this.brand = response;
      },
      (error)=>{
        console.log("Error");
      }
    );

  }

}
