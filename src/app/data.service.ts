import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  //MENU INTERFACE
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest():Observable<ProductInterface[]>{
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER);
  }

  public addproduct(data: any):Observable<ProductInterface>{
    return this.httpClient.post<ProductInterface>(this.REST_API_SERVER, data)
    
  }

  public updateproduct(data:any, id:number ):Observable<ProductInterface> {
    return this.httpClient.patch<ProductInterface>(this.REST_API_SERVER+"/"+id, data);
  }

  public getLimitedProducts(page= 1, limit = 20):Observable<ProductInterface[]>{

    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER+"?_page="+page +"?_limit="+limit);
  }

  
  //This Scans the ID for the product

  //FOR WHERE YOU SEE 

  public fetchItem(id: Number):Observable<ProductInterface>{
    return this.httpClient.get<ProductInterface>(`${this.REST_API_SERVER}/${id}`);
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
