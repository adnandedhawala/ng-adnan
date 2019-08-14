import { Component, OnInit } from '@angular/core';

// import {HttpClient} from '@angular/common/http';
import { DataprocessService } from '../dataprocess.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public category: any;
  public brand: any;

  constructor(private db: DataprocessService) { }

  ngOnInit() {
    // console.log(this.httpData);
    this.db.getData("category").subscribe(
      (response) => {
        // console.log(response);
        this.category = response;
      },
      (error) => {
        console.log("Error");
      }
    );

    this.db.getData("brand").subscribe(
      (response) => {
        console.log(response);
        this.brand = response;
      },
      (error) => {
        console.log("Error");
      }
    );

  }
  sendData(id,ev){
    ev.preventDefault();

    let  data ={brid:id};
    this.db.setData(data);
  }
}
