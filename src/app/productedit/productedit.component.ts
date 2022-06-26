import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, ProductInterface } from '../data.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  product !: ProductInterface;
  id = 0;
  @ViewChild('form') editForm!: ElementRef;
  constructor(
    private dataservice: DataService,
    private activatedroute: ActivatedRoute,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
    this.getItem()

  

  }


  getItem() {


     this.id = this.activatedroute.snapshot.params['id'];



    this.dataservice.fetchItem(this.id).subscribe((data: ProductInterface) => {
      this.product = data;




    });

  }
    updateproduct(){
      let formdata = this.editForm.nativeElement as HTMLFormElement;
      let data = {
        price: parseFloat((formdata.querySelector("input[name='price']") as HTMLInputElement).value),
        quantity: parseInt((formdata.querySelector("input[name='quantity']") as HTMLInputElement).value),

      };
      this.dataservice.updateproduct(data,this.id).subscribe((response) => {
        console.log(response)
        alert("Changes made successfully")
        this.router.navigateByUrl("/inventory");
      })


    }

}
