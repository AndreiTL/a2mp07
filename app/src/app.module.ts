import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';

import {GoogleMapModule} from './modules/googleMap/googlemap.module';
import {SharedModule} from './modules/sharedModule/shared.module';
import {WeatherModule} from './modules/weatherModule/weather.module';

import { AppComponent }  from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

// import { GooglemapComponent } from './modules/googleMap/components/googlemap/googlemap.component';
// import { WeatherComponent } from './modules/weatherModule/components/weather/weather.component';
// import { LoadMaskComponent } from './modules/sharedModule/components/loadmask/loadmask.component';

// import {GoogleMapLoaderService} from './modules/googleMap/services/google_maps_loader.service';
// import {GoogleMapModelService} from './modules/googleMap/services/google_maps_model.service';
// import {LocationService} from './modules/sharedModule/services/location.service';
// import {StorageService} from './modules/sharedModule/services/storage.service';
// import {MarkersService} from './modules/sharedModule/services/markers.service';
// import {RestService} from './modules/sharedModule/services/rest.service';
// import {WeatherModelService} from './modules/weatherModule/services/weather_model.service';
// import {WeatherFavoriteModelService} from './modules/weatherModule/services/weather_favorite_model.service';

// import {TemperatureCelciumPipe} from './components/common/pipes/temperature.pipe';
// import {WindDirectionTextPipe} from './components/common/pipes/winddirectiontext.pipe';

// import {WindArrowDirective} from './modules/weatherModule/directives/wind-arrow.directive';
// import {TownColorDirective} from './modules/weatherModule/directives/town-color.directive';
// import {WeatherIconDirective} from './modules/weatherModule/directives/weather-icon.directive';

@NgModule({
  imports: [
    // BrowserModule,
    // FormsModule,
    SharedModule.forRoot(),
    GoogleMapModule,
    WeatherModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // GooglemapComponent,
    // WeatherComponent,
    // LoadMaskComponent,
    // TemperatureCelciumPipe,
    // WindDirectionTextPipe,
    // WindArrowDirective,
    // TownColorDirective,
    // WeatherIconDirective
  ],
  providers: [
    // RestService,
    // MarkersService,
    // StorageService,
    // LocationService,
    // WeatherModelService,
    // WeatherFavoriteModelService,
    // GoogleMapLoaderService,
    // GoogleMapModelService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
