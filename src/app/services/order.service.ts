import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderType} from "../../types/order.type";
import {Observable, tap} from "rxjs";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  order(body: OrderType):Observable<any> {
   return  this.http.post('https://testologia.ru/order-tea', body)
  }

}
