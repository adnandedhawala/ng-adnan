import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public product:any;

  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
    this.httpclient.get("http://localhost:3000/product").subscribe(
      (response)=>{
        this.product = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
