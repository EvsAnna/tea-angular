import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: number | null = null;
  product$: Subscription | null = null;
  product: ProductType | null = null;
  loader:boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.productId = params['id'];
      }
    })
    if (this.productId) {
      this.product$ = this.productService.getProduct(this.productId).subscribe((data)=> {
        this.loader = false;
        this.product = data;
      })
    }
    // получить id продукта
  }

  orderProduct(){
    this.router.navigate(['order'], {queryParams:{product:this.product?.title}})
  }

}
