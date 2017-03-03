import {NgModule, ModuleWithProviders}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {LocationService} from './services/location.service';
import {StorageService} from './services/storage.service';
import {RestService} from './services/rest.service';

import {LoadMaskComponent} from './components/loadmask/loadmask.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    LoadMaskComponent
  ],
  providers: [
    RestService,
    StorageService,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    LoadMaskComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LocationService
      ]
    }
  }

}
