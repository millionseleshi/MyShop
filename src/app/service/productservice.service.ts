import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productURL=environment.baseProductURL;
  getProduct()
  {
    this.http.get(this.productURL);
  }
}
