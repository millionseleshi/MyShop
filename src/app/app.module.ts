import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/auth-service.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './service/auth-guard.service';
import {ProductService} from './service/productservice.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
  ],
  providers: [AuthService,AuthGuardService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
