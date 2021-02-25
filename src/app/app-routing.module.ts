import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './component/customers/customers.component';
import {LoginComponent} from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {OrdersComponent} from './component/orders/orders.component';
import { NewCustomerComponent } from './component/new-customer/new-customer.component';

const routes: Routes = [
  {path : 'customers', component : CustomersComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'orders', component : OrdersComponent},
  {path : 'customers/ncustomer', component : NewCustomerComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
