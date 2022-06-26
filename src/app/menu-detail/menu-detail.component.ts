import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from 'menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  id = 0;
  menu !:IMenu;
  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get("id");

    this.id = (paramId) ? this.id = parseInt(paramId) : 10000;
    this.menuService.getMenuItemById(this.id).subscribe((response:IMenu) => {
      this.menu = response;
    })
  }

}
