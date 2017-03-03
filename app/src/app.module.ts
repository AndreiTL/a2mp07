import { NgModule }      from '@angular/core';

import {GoogleMapModule} from './modules/googleMap/googlemap.module';
import {SharedModule} from './modules/sharedModule/shared.module';
import {WeatherModule} from './modules/weatherModule/weather.module';

import { AppComponent }  from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GoogleMapModule,
    WeatherModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
