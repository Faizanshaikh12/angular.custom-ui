import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import {UserService} from './user.service';
import { AuthServiceService } from './component/register/auth-service.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { CustomersComponent } from './component/customers/customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './component/card/card.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { OrdersComponent } from './component/orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './component/new-customer/new-customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NcformComponent } from './ncform/ncform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    NewCustomerComponent,
    NcformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,

  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
  entryComponents:[NcformComponent]
})
export class AppModule { }
