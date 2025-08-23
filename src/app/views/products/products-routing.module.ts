import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path:'catalog', component: CatalogComponent, title:'Tea'},
  {path:'product', component: ProductComponent, title:'Tea'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
