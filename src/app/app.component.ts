import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // texte müssen als multi language aus dem Backend besorgt werden
  title = 'Baustelle';
  landing_page = "Home";
  civil_engineering = 'Hochbau';
  buiding_construction = 'Tiefbau'
}
