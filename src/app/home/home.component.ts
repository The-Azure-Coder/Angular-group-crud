import { Component, OnInit } from '@angular/core';
import { DataService, ProductInterface } from '../data.service';
import { PageEvent } from '@angular/material/paginator'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!:ProductInterface[];
  constructor(private dataservice: DataService) { }

  // Paginator Event
  pageEvent !: PageEvent;
  pageSizeOptions = [8, 16,20, 40];
  pageSize = 20;
  length = 100;
  ngOnInit() {
    this.dataservice.sendGetRequest().subscribe((data)=>{
      this.length = data.length;
    })
    this.dataservice.getLimitedProducts().subscribe((data:ProductInterface[]) => {
      this.products = data;
    })
  }

  getPageWithIndex(event:PageEvent){
    let pageEvent = event
    this.dataservice.getLimitedProducts(++pageEvent.pageIndex, pageEvent.pageSize).subscribe((data)=>{
      this.products = data;
    })
  }

}
