import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  scrollTopService;
  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }
}