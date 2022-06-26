import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from 'menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuApiEndpoint = 'http://localhost:3000/menus'
  constructor(private http: HttpClient) { }

  getAllMenuItems(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>(this.menuApiEndpoint);
  }

  getMenuItemById(id:number):Observable<IMenu>{
    return this.http.get<IMenu>(this.menuApiEndpoint+"/"+id);
  }
  public addMenu(data: any):Observable<IMenu[]>{
    return this.http.post<IMenu[]>(this.menuApiEndpoint,data);
  }

  public updateMenu(data: any,id:number):Observable<IMenu[]>{
    return this.http.patch<IMenu[]>(this.menuApiEndpoint+"/"+id,data)
  }

  public getLimitedMenus(page = 1,limit = 20):Observable<IMenu[]>{

    return this.http.get<IMenu[]>(this.menuApiEndpoint+"?_page" +page +"?_limit"+limit)
  }

  public deleteMenu(id:number):Observable<IMenu[]>{
  return this.http.delete<IMenu[]>(this.menuApiEndpoint+"/"+id) //DELETE A MENU
  }

}




