import { Component, OnInit } from '@angular/core';
import { IMenu } from 'menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus!:IMenu[];
  randomItem!: IMenu
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllMenuItems().subscribe((response:IMenu[]) => {
      this.menus = response;
      this.randomItem = this.menus[Math.ceil(Math.random() * this.menus.length-1)]
    })
    
  }

}
