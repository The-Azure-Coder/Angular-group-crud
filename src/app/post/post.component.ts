import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('addProductForm') creationForm!:ElementRef;
  constructor(
    private dataservice: DataService,
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) { 
    
  }
  

  ngOnInit(): void {
    

  }

  createproduct() {

    let formdata = this.creationForm.nativeElement as HTMLFormElement;
    let data = {
      id: 0,
      name: (formdata.querySelector("input[name='name']") as HTMLInputElement).value,
      description: (formdata.querySelector("input[name='description']") as HTMLInputElement).value,
      price: parseFloat((formdata.querySelector("input[name='price']") as HTMLInputElement).value),
      quantity: parseInt((formdata.querySelector("input[name='quantity']") as HTMLInputElement).value),
      imageUrl: (formdata.querySelector("input[name='imageUrl']") as HTMLInputElement).value,
    };
    this.dataservice.sendGetRequest().subscribe((response)=>{
        data.id = response.length +1;
        this.dataservice.addproduct(data).subscribe((response)=>{
          console.log(response)
          this.router.navigateByUrl("/home");
        })
    })

    
    
  }
}
