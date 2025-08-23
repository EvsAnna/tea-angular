import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', loadChildren: ()=> import('./views/main/main.module').then(m=> m.MainModule)},
      {path: '', loadChildren: ()=> import('./views/order/order.module').then(m=> m.OrderModule)},
      {path: '', loadChildren: ()=> import('./views/products/products.module').then(m=> m.ProductsModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
