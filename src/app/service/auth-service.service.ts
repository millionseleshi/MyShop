import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http:HttpClient,private route:Router) { }

  loginURL=environment.baseLoginURL;
  logoutURL=environment.baseLogoutURL;
  user=environment.baseUSERURL;

  isLoggedIn=false;
  isBuyer=false;

   UserLogin(username,password,remember_me=true) {
     return this.http.post(this.loginURL, {username, password, remember_me}).pipe(map(
         response=>{

             if(response['token'] && response['message'] && response['role'])
             {
                 localStorage.setItem('message', response['message']);
                 localStorage.setItem('token', response['token']);
                 localStorage.setItem('role', response['role']);
                 return this.activeUser()
             }
         }
     ));
   }

   UserLogout()
   {
       let token=this.authToken();
       let accessToken='Bearer '+token;

      let authHeader=new HttpHeaders();
       authHeader=authHeader.set('Authorization',accessToken);
      return this.http.get(this.logoutURL,{headers:authHeader}).pipe(map(
           response=>{
               if(response['message']=='Successfully Logged Out')
               {
                  localStorage.clear();
                  return this.activeUser();
               }
           }
       ))
   }

   activeUser()
   {
       if(this.authToken!=null)
       {
           return this.isLoggedIn=true;
       }
       else {
           return this.isLoggedIn=false;
       }
   }

   userRole()
   {
       let role=localStorage.getItem('role')
       if(role=='buyer')
       {
           return this.isBuyer=true;
       }
   }

   authToken()
   {
       let token=localStorage.getItem('token');
       return token;
   }
}
