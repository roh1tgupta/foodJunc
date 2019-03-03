import { Injectable } from '@angular/core';
import { MenuGroupItem } from './menuGroupItem';
import { MENU } from './menu';
import { MenuItem } from './menuItem';
@Injectable()
export class MenuService {

  
  constructor() { }

  getMenu(): MenuGroupItem[] {
    return MENU;
  }

}
