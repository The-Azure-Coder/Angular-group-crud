import { Component, OnInit } from '@angular/core';
import { DataService, MenuInterface } from '../data.service';
import { PageEvent } from '@angular/material/paginator'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menus!: MenuInterface[];
  constructor(private dataservice: DataService) { }
 // Paginator Event
 pageEvent !: PageEvent;
 pageSizeOptions = [8, 16, 15, 40, 100];
 pageSize = 20;
 length = 100;
  ngOnInit(): void {

    this.dataservice.sendGetRequestMenu().subscribe((data)=>{
      this.length = data.length;
    })
    this.dataservice.getLimitedMenus().subscribe((data:MenuInterface[]) => {
      this.menus = data;
    })

  }

  getPageWithIndex(event:PageEvent){
    let pageEvent = event
    console.log(pageEvent.pageIndex);
    this.dataservice.getLimitedMenus(++pageEvent.pageIndex, pageEvent.pageSize).subscribe((data)=>{
      this.menus = data;
    })
  }
  
}
