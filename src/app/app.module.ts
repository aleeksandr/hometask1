import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatTabsModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { PlacesFilterPipe } from './common/pipes/places-filter.pipe';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { PhonePipe } from './common/pipes/phone.pipe';
import { SocialCardComponent } from './social-card/social-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    PlacesFilterPipe,
    WeatherCardComponent,
    PhonePipe,
    SocialCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
