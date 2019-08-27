import { Injectable } from '@angular/core';
import { DataprocessService } from './dataprocess.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public count: number = 0;

  constructor(private cart: CookieService, private ds: DataprocessService) { }

  add_in_cart(proid) {
    let ans = this.cart.get("cartRec");
    // console.log(ans);
    if (ans == "") {
      this.cart.set("cartRec", proid);
      alert("record added");
      this.count =1;
    } else {
      // console.log(ans);
      let arr = ans.split(',');
      let position = arr.indexOf(proid.toString());
      // console.log(position);
      if(position == -1){
        let newpro = ans+","+proid;
        this.cart.set("cartRec",newpro);
        alert("Cart Updated");
        this.count = arr.length+1;
      }else{
        alert("product exist in cart");
        this.count =arr.length;
      }
      this.ds.passCartCount({count:this.count});
    
    }
  }

  cart_count(){
    let ans = this.cart.get("cartRec");
    // if(ans==""){
    //   return 0;
    // }else{
    //   return ans.split(",").length;
    // }


    return (ans=="")?0:(ans.split(",").length);
  }

  show_in_cart(){
    let cartList = this.cart.get("cartRec");
    if(cartList!=""){
      let cartArr = cartList.split(',');
      return cartArr;
    }else{
      return "";
    }
  }

  delete_from_cart(id){
    let cartList = this.cart.get("cartRec");
    let cartArr = cartList.split(',');
    cartArr.splice(cartArr.indexOf(id.toString()),1);
    console.log(cartArr);
    this.cart.set("cartRec",cartArr.join(','));
    this.ds.passCartCount({count:cartArr.length});

  }
}
