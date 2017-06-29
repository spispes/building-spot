import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civil-engineering',
  templateUrl: './civil-engineering.component.html',
  styleUrls: ['./civil-engineering.component.css']
})
export class CivilEngineeringComponent implements OnInit {
  place : string;
  constructor() { this.place = "Hamburg sommerhuder Straße 12, Germany";}

  ngOnInit() {

  }

}
