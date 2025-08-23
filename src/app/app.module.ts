import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import {ProductService} from "./services/product.service";
import { HttpClientModule} from "@angular/common/http";
import { QuickDescriptionPipe } from './pipe/quick-description.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    QuickDescriptionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbAccordionModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
