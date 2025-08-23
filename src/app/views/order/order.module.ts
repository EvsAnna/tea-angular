import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule {
}
