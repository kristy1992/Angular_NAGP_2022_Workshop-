import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  pageNo="null";
  snapshotPageNo="null"; 
   
  constructor(private productService:ProductService,
    private Activatedroute:ActivatedRoute,
               private router:Router){
   }
 
   ngOnInit() {
    this.products=this.productService.getProducts();
    // this.snapshotPageNo =this.Activatedroute.snapshot.queryParamMap.get('page')|| '0';
       
 
    // this.Activatedroute.queryParamMap
    //         .subscribe((params) => { 
    //           this.pageNo = params.get('page')|| '0';
    //           console.log('Query params ',this.pageNo) 
    //       });
   }

}
