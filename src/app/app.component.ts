import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menuItem';
import { MenuGroupItem } from './menuGroupItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  items: MenuItem[];
  wholeMenu: MenuGroupItem[];
 
  constructor(private menuService: MenuService,
    private route:Router) {  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.wholeMenu=this.menuService.getMenu();
  }

  search(searchItem: string)
  {
    this.items=this.searchme(searchItem);
  }
  searchme(searchItem: string, items: MenuItem[]=[]) {
    if(searchItem.length>3)
    { 
      for(let i=0;i<this.wholeMenu.length;i++)
      {
        for(let j=0;j<this.wholeMenu[i].list.length;j++)
        {
          if(this.wholeMenu[i].list[j].name.toLowerCase().indexOf(searchItem.toLowerCase())>-1)
            {
              items.push(this.wholeMenu[i].list[j]);
              
            }
            //alert(items.length);
            if(items.length>3)
            return items;
        }
      }  
    }
    return items;
}

  routeToFoodItem(item: MenuItem) {
    window.location.reload();
    sessionStorage.setItem("itemKaNam",item.name);
    sessionStorage.setItem("itemKiKimat",item.cost);
    sessionStorage.setItem("itemKiImage",item.url);
    this.route.navigate(['foodItem']);

  }

}
