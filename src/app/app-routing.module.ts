import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent }   from './menu/menu.component';
import { HomeComponent }   from './home/home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlaceOrderComponent} from './place-order/place-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'foodItem', component: FoodItemComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'placeOrder', component: PlaceOrderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}