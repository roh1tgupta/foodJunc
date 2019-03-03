import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuGroupItem } from '../menuGroupItem';
import { MenuItem } from '../menuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menues: MenuGroupItem[];
  menuItems: MenuItem[];
  constructor(
    private menuService : MenuService,
    private route:Router,
  ) { }

  ngOnInit() {
    this.getMenu();
    this.menuItems= this.menues[0].list;
  }

  showList(index: any) {
    this.menuItems=this.menues[index].list;
  }
  getMenu(): void {
    this.menues=this.menuService.getMenu();
  }

  routeToFoodItem(index: number) {
    sessionStorage.setItem("itemKaNam",this.menuItems[index].name);
    sessionStorage.setItem("itemKiKimat",this.menuItems[index].cost);
    sessionStorage.setItem("itemKiImage",this.menuItems[index].url);
    this.route.navigate(['foodItem']);

  }

}
