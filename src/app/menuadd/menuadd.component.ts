import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../menu.service';
import { IMenu } from 'menu';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menuadd',
  templateUrl: './menuadd.component.html',
  styleUrls: ['./menuadd.component.css']
})
export class MenuaddComponent implements OnInit {

  @ViewChild('addMenuForm')creationForm!:ElementRef;

  constructor(
    private menuservice:MenuService,
    private activatedroute:ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  createmenu(){
    let formdata = this.creationForm.nativeElement as HTMLFormElement;
    let data = {
      id: 0,
      menu_name: (formdata.querySelector("input[name=menu_name]") as HTMLInputElement).value,
      menu_description: (formdata.querySelector("input[name=menu_description]") as HTMLInputElement).value,
      menu_size: (formdata.querySelector("input[name=menu_size]") as HTMLInputElement).value,
      imageUrl: (formdata.querySelector("input[name=imageUrl]") as HTMLInputElement).value,
      cost: (formdata.querySelector("input[name=cost]") as HTMLInputElement).value,
    };
    this.menuservice.getAllMenuItems().subscribe((response) => {
      data.id = response.length + 1;
      this.menuservice.addMenu(data).subscribe((response)=> {
        console.log(response)
        alert("Menu sucessfully added!")
        this.router.navigateByUrl("/menus");
      })
    })
  }
}
// menu_name: string;
// menu_description: string;
// menu_size: number;
// imageUrl: string;
// cost: number