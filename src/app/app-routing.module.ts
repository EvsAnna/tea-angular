import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";

const routes: Routes = [
  {path:'', component: MainComponent, title:'Tea'},
  {path:'catalog', component: CatalogComponent, title:'Tea'},
  {path:'product', component: ProductComponent, title:'Tea'},
  {path:'order', component: OrderComponent, title:'Tea'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
