import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CartComponent } from './product/cart/cart.component';
import {
  ProductItemComponent,
} from './product/product-item/product-item.component';
import {
  SingleItemComponent,
} from './product/single-item/single-item.component';

const route: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: 'proudect-item/:id',
    component: SingleItemComponent,
    pathMatch: 'full',
  },
  { path: '', component: ProductItemComponent },
  { path: 'proudect-item', component: ProductItemComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'proudect-item' },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
