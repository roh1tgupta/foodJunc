import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuService } from './menu.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FoodItemComponent } from './food-item/food-item.component';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PlaceOrderComponent,
    ContactUsComponent,
    FoodItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule { }
