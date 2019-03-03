import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myInterval = 1500;
  activeSlideIndex = 0;
 
  slides = [
    {image: '../assets/foody/random1.jpg'},
    {image: '../assets/foody/random2.jpg'},
    {image: '../assets/foody/random3.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
