import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }

  public addproduct(data: any) {
    return this.httpClient.post<any[]>(this.REST_API_SERVER, data)
    
  }

  public updateproduct(data:any, id:number ) {
    return this.httpClient.patch<any[]>(this.REST_API_SERVER+"/"+id, data);
  }

  public getLimitedProducts(page?:number, limit?:number):Observable<ProductInterface[]>{
    if(!page){
      page = 1;
    }
    if(!limit){
      limit = 20;
    }
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER+"?_page="+page +"&_limit="+limit);
  }

  
  
  //This Scans the ID for the product

  //FOR WHERE YOU SEE 

  public fetchItem(id: Number){
    return this.httpClient.get<any[]>(`${this.REST_API_SERVER}/${id}`);
  }
}

export interface ProductInterface{
  id:number;
  name: string;
  description:string;
  price: number;
  imageUrl:string;
  quantity:number;
}
