import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

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
