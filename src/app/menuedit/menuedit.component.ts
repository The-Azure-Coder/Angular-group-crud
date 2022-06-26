import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuService } from '../menu.service';
import { IMenu } from 'menu';



@Component({
  selector: 'app-menuedit',
  templateUrl: './menuedit.component.html',
  styleUrls: ['./menuedit.component.css']
})
export class MenueditComponent implements OnInit {
   menu!: IMenu;
   id = 0;
   @ViewChild('menuUpdate') editform!: ElementRef;

  constructor(
    private menuservice: MenuService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){

    this.id = parseInt(this.activatedroute.snapshot.params['id']);

    this.menuservice.getMenuItemById(this.id).subscribe((data: IMenu)=>{
      this.menu = data;
    })
  }

  updateMenu(){
    let formdata = this.editform.nativeElement as HTMLFormElement;
    let data = {
       cost: parseFloat((formdata.querySelector("input[name= 'cost']")as HTMLInputElement).value),
       size: parseInt((formdata.querySelector("input[name= 'menu_size']") as HTMLInputElement).value)
    };

    this.menuservice.updateMenu(data,this.id).subscribe((response)=>{
      console.log(response)
      alert("Changes made successfully")
      this.router.navigateByUrl("/menu")
    })
  }

  
}
