import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) {}

  ngOnInit() {
  }

     isLoggedIn=this.auth.isLoggedIn;

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
