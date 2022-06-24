import { Component, OnInit } from '@angular/core';
import { DataService, ProductInterface } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!:ProductInterface[];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getLimitedProducts().subscribe((data:ProductInterface[]) => {
      this.products = data;
    })
  }

}
