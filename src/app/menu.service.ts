import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private REST_API_SERVER = 'http://localhost:3000/menus'

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest():Observable<MenuInterface[]>{
    return this.httpClient.get<MenuInterface[]>(this.REST_API_SERVER);
  }

  public addMenu(data: any):Observable<MenuInterface[]>{
    return this.httpClient.post<MenuInterface[]>(this.REST_API_SERVER,data);
  }

  public updateMenu(data: any,id:number):Observable<MenuInterface[]>{
    return this.httpClient.patch<MenuInterface[]>(this.REST_API_SERVER+"/"+id,data)
  }

  public getLimitedMenus(page = 1,limit = 20):Observable<MenuInterface[]>{
    if(!page){
      page = 1;
    }
    if(!limit){
      limit = 20;
    }
    return this.httpClient.get<MenuInterface[]>(this.REST_API_SERVER+"?_page" +page +"?_limit"+limit)
  }

  public deleteMenu(id:number):Observable<MenuInterface[]>{
  return this.httpClient.delete<MenuInterface[]>(this.REST_API_SERVER+"/"+id) //DELETE A MENU
  }


   //This Scans the ID for the product

  //FOR WHERE YOU SEE 

  public fetchItem(id: Number):Observable<MenuInterface>{
    return this.httpClient.get<MenuInterface>(`${this.REST_API_SERVER}/${id}`);
  }
}


export interface MenuInterface{
  id:number,
  menu_name:string,
  menu_description:string,
  menu_size:number,
  cost:Number,
  imageUrl:string
}
