import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from 'menu';
import { Observable } from 'rxjs';

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

  public addMenu(data:any):Observable<IMenu>{
    return this.http.post<IMenu>(this.menuApiEndpoint, data);
  }
}


