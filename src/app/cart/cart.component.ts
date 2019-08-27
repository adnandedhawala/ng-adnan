import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataprocessService } from '../dataprocess.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product = [];


  constructor(private cs: CartService, private ds: DataprocessService) { }

  ngOnInit() {
    let cartData = this.cs.show_in_cart();
    // console.log(cartData);
    if (cartData.length > 0) {
      this.ds.getData('product').subscribe(
        (response) => {
          for (let key in response) {
            let proid = response[key].id;
            // console.log(proid);
            if(cartData.indexOf(proid.toString()) != -1){
              this.product.push(response[key]);
            }
          }
        }
      )
    }
  }

  deleteCart(ev,id){
    ev.preventDefault();
    // console.log(id);
    this.cs.delete_from_cart(id);
    ev.target.parentNode.parentNode.parentNode.parentNode.style.display="none";
  }

}
