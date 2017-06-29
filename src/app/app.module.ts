import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {routerConfig} from "router.config";
import {RouterModule} from "@angular/router";
import {CivilEngineeringComponent} from './civil-engineering/civil-engineering.component';
import {BuildingConstructionComponent} from './building-construction/building-construction.component';
import {CarouselComponent} from './carousel/carousel.component';
import {JsonpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NguiMapModule} from '@ngui/map';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CivilEngineeringComponent,
    BuildingConstructionComponent,
    CarouselComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBY-v3vIjnVSbqWxoJS08jFmhAFRnwF2Ls' +
      '&libraries=visualization,places,drawing'
    }),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
