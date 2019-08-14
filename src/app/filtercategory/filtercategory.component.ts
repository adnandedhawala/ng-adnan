import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DataprocessService} from '../dataprocess.service';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.component.html',
  styleUrls: ['./filtercategory.component.css']
})
export class FiltercategoryComponent implements OnInit {
  public product:any;
  constructor(private route: ActivatedRoute,private db:DataprocessService) { }

  ngOnInit() {
    let urldata = this.route.snapshot.params.myvar;
    // console.log(urldata);
    this.db.getData("product").subscribe(
      (result)=>{
        var newArr =[];
        for(let key in result){
          // console.log(result[key]);
          if(urldata==result[key]['procaid']){
            newArr.push(result[key]);
          }
        }
        this.product = newArr;
      }
    )
  }

}
