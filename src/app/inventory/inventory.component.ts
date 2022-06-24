import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products:any = [];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.sendGetRequest().subscribe((data:any[]) => {
      this.products = data;
      
    })
  }

}