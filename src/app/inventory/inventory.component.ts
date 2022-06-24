import { Component, AfterViewInit, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['id','name','description', 'price', 'quantity', 'action' ];
  dataSource!: MatTableDataSource<any>;
  cardInfo = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  products:any = [];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getInventoryInfo()
   
  }

  getInventoryInfo() {
    // this.dataservice.sendGetRequest().subscribe((data:any[]) => {
    //   this.products = data;
    //   this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.paginator = this.paginator
    //     this.dataSource.sort = this.sort

        this.dataservice.sendGetRequest().subscribe({
          next: (res) => {
            console.log(res)
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator
            this.dataSource.sort = this.sort
          },
          error: (err) => {
            alert("Error while fetching the records")
    
          }
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


