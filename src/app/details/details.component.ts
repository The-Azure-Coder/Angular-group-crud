import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  products:any = [];
 
  quantity:any = 0;
   
  // price() {
  //   var price = this.quantity * this.product.price;
  //   return ;
  // }

  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getItem()

}
getItem(){
  
  
  const id = this.route.snapshot.params['id'];
  
   

  this.dataservice.fetchItem(id).subscribe((data:any[]) => {
    this.products = data;
    

    
    
});
}
}

