import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.scss']
})
export class ProductList2Component implements OnInit {

  public products!: Product[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products=this.route.snapshot.data['products'];
  }

}
