import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {QuickDescriptionPipe} from "./pipe/quick-description.pipe";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    QuickDescriptionPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    QuickDescriptionPipe,
  ]
})
export class SharedModule {
}
