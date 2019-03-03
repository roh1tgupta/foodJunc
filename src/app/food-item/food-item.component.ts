import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  itemName: string;
  itemCost: string;
  itemUrl: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.itemName=sessionStorage.getItem("itemKaNam");
    this.itemCost=sessionStorage.getItem("itemKiKimat");
    this.itemUrl=sessionStorage.getItem("itemKiImage");
    //this.itemName = this.route.snapshot.paramMap.get('name');
    //this.heroService.getHero(id)      .subscribe(hero => this.hero = hero);
  }

}
