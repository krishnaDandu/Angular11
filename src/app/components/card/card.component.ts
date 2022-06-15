import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showItems = 3;
  showText = "Showmore";
  products : any;
  constructor(  private productService: ProductService,) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        
        this.products = data;
        //this.showItems = data.length;
      },
      (error) => console.log(error)
    );
  }

  Showmore(index){
    if(index <= 3) {
      this.showItems = this.products.length;
      this.showText = "Showless";
    }else {
      this.showItems = 3;
      this.showText = "Showmore"
    }
    
  }

}
