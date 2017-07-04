import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-spot-highlevel',
  templateUrl: './building-spot-highlevel.component.html',
  styleUrls: ['./building-spot-highlevel.component.css']
})
export class BuildingSpotHighlevelComponent implements OnInit {

  constructor() { }

  addBuildingSpot(): boolean{
    console.log("Adding a building spot");
    return false
  }
  ngOnInit() {
  }

}
