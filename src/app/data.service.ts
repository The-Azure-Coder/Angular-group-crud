import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  //MENU INTERFACE
  private MENU_API_SERVER = 'http://localhost:3000/menus';

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

  

  public sendGetRequest(): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER);
  }

  public addproduct(data: any): Observable<ProductInterface> {
    return this.httpClient.post<ProductInterface>(this.REST_API_SERVER, data)

  }

  public updateproduct(data: any, id: number): Observable<ProductInterface> {
    return this.httpClient.patch<ProductInterface>(this.REST_API_SERVER + "/" + id, data);
  }

  public getLimitedProducts(page = 1, limit = 20): Observable<ProductInterface[]> {
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 20;
    }
    return this.httpClient.get<ProductInterface[]>(this.REST_API_SERVER + "?_page=" + page + "&_limit=" + limit);
  }


  //This for the MENU items

  public sendGetRequestMenu(): Observable<MenuInterface[]> {
    return this.httpClient.get<MenuInterface[]>(this.MENU_API_SERVER);
  };

  public getLimitedMenus(page = 1, limit = 20): Observable<MenuInterface[]> {
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 20;
    }
    return this.httpClient.get<MenuInterface[]>(this.MENU_API_SERVER + "?_page=" + page + "&_limit=" + limit);
  }

  


  //This Scans the ID for the product

  //FOR WHERE YOU SEE 

 Updated upstream
  public fetchItem(id: Number){
    return this.httpClient.get<any[]>(`${this.REST_API_SERVER}/${id}`);

  public fetchItem(id: Number): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(`${this.REST_API_SERVER}/${id}`);

  }

  public fetchItemMenu(id: Number): Observable<MenuInterface> {
    return this.httpClient.get<MenuInterface>(`${this.MENU_API_SERVER}/${id}`);
  }
}


export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

//This scan the ID for the Menu


export interface MenuInterface {
  id: number;
  menu_name: string;
  menu_description: string;
  menu_size: 1
  cost: number;
  imageUrl: string;
  
}

