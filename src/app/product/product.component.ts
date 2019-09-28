import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth-service.service';
import {Router} from '@angular/router';
import {ProductService} from '../service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router,private productService:ProductService) { }

  ngOnInit() {
  }
    isLoggedIn=this.auth.isLoggedIn;
    products:any

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

    allProduct()
    {
        this.productService.getProduct().subscribe(
            (result)=>
            {
                console.log(result)
               return this.products=result;
            }
        )
    }
}
