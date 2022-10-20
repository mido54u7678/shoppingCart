import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { CartComponent } from '../product/cart/cart.component';
import {
  ProductItemComponent,
} from '../product/product-item/product-item.component';
import {
  SingleItemComponent,
} from '../product/single-item/single-item.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductItemComponent,
    SingleItemComponent,
    CartComponent,
    LoadingComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SingleItemComponent,
    LoadingComponent,
    SignUpComponent,
    LoginComponent,
  ],
})
export class MyModuleModule {}
