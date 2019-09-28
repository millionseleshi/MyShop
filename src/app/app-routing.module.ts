import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {ProductComponent} from './product/product.component';




const routes: Routes = [
    {path:'' ,component: HomeComponent},
    {path: 'product',component: ProductComponent,canActivate: [AuthGuardService]},
    {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
