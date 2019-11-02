import { Injectable } from '@angular/core';
import {AuthService} from './auth-service.service';
import {CanActivate, Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private route:Router) { }

    canActivate() {
      if (this.auth.isLoggedIn==true)
      {
          return true;
      }
        this.route.navigate(['login']);
       return false

  }



}
