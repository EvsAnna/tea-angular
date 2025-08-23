import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderType} from "../../../types/order.type";
import {environment} from "../../../environments/environment";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  order(body: OrderType):Observable<{success:number, message?:string}> {
   return (this.http.post(environment.apiURL + '/order-tea', body) as Observable<{success:number, message?:string}>)
  }

}
