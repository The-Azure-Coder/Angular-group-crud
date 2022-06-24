import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  
  //This Scans the ID for the product

  //FOR WHERE YOU SEE 

  public fetchItem(id: Number){
    return this.httpClient.get<any[]>(`${this.REST_API_SERVER}/${id}`);
  }
}
