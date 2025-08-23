import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  products$: Subscription | null = null;
  products: ProductType[] = [];
  loader:boolean = true;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
      .subscribe((data) => {
        this.loader = false
        this.products = data;
      })
  }

  ngOnDestroy() {
    this.products$?.unsubscribe()
  }

  openProduct(id:number){
    this.router.navigate(['product'],  {queryParams:{id:id}})

  }

}
