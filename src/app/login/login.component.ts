import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../service/auth-service.service';
import {Router} from '@angular/router';
import {pipe} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm;
    rememberMe=false;
    errorMessage;
  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router) {

      this.loginForm = fb.group({
          'username': ['', [Validators.required]],
          'password': ['', Validators.required],
          'remember': ['']
      })
  }
    isLoggedIn=this.auth.isLoggedIn;

  ngOnInit() {
  }

  get userName()
  {
      return this.loginForm.get('username').value
  }

  get password()
  {
      return this.loginForm.get('password').value
  }

  get remember()
  {
      this.rememberMe=this.loginForm.get('remember').value
      return this.rememberMe
  }

  login() {
      this.auth.UserLogin(this.userName, this.password).pipe(map((result)=>
      {
          if (result==true)
          {
              this.route.navigate(['product'])
              this.isLoggedIn=true;
          }
          else {
              this.errorMessage=true;
          }
      })).subscribe();
  }

    logout()
    {
        this.auth.UserLogout().subscribe(
            result=>{
                if(result==true)
                {
                    this.route.navigate([''])
                }
            }
        );
    }


}
