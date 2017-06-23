/**
 * Created by peter on 21.06.2017.
 */
import {Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {CivilEngineeringComponent} from "./app/civil-engineering/civil-engineering.component";
import {BuildingConstructionComponent} from "./app/building-construction/building-construction.component"

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    // path muss durch variable ersetzt werden
    path: 'Hochbau',
    component: CivilEngineeringComponent
  },
  {
    // path muss durch variable ersetzt werden
    path: 'Tiefbau',
    component: BuildingConstructionComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
