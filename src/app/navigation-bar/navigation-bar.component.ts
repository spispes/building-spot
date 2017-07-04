import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }
  title = 'Baustelle';
  landing_page = "Home";
  civil_engineering = 'Hochbau';
  buiding_construction = 'Tiefbau'
  ngOnInit() {
  }

}
