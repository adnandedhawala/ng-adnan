import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { DataprocessService } from '../dataprocess.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public product: any;

  constructor(private db: DataprocessService) { }

  ngOnInit() {
    this.db.getData("product").subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.db.obj_subjectClass.subscribe(
      (result) => {
        // console.log("right:-->",result);
        let id = result['brid'];
        console.log(id);
        ////////////////////////
        let urldata = id;
        // console.log(urldata);
        this.db.getData("product").subscribe(
          (result) => {
            var newArr = [];
            for (let key in result) {
              // console.log(result[key]);
              if (urldata == result[key]['brid']) {
                newArr.push(result[key]);
              }
            }
            this.product = newArr;
          }
        )
      }
    )
  }

}
