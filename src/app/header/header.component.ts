import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataprocessService } from '../dataprocess.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public flag1: boolean = true;
  public flag2: boolean = false;
  public userName: string = "";
  public cartTotalCount:number;
  constructor(private auth: AuthService, private ds: DataprocessService,private cs:CartService) { }


  ngOnInit() {
    let ans = this.auth.checkKey();

    if (ans) {
      this.flag1 = false;
      this.flag2 = true;
    }

    this.ds.obj_subject_for_name.subscribe(
      (response) => {
        // console.log(response);
        if (response['uname'] != "") {
          this.userName = response['uname'];
          this.flag1 = false;
          this.flag2 = true;
        } else {
          this.userName = "";
          this.flag1 = true;
          this.flag2 = false;
        }
      }
    )

    this.ds.obj_cart.subscribe(
      (res)=>{
        // console.log(res)
        this.cartTotalCount = res['count'];
      },
      (error)=>{
        console.log(error);
      }
    )

    this.cartTotalCount = this.cs.cart_count();
  }

}
