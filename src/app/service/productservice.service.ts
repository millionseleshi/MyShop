import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productURL=environment.baseProductURL;
  allProduct;
  getProduct()
  {
  return  this.http.get(this.productURL).pipe(map(
        response=>{
            if(response['product']!=null)
            {
                this.allProduct=response['product']
                //console.log("Service"+this.allProduct);
                return this.allProduct;

            }
        }
    ));
  }
}
