import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatTabsModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { PlacesFilterPipe } from './common/places-filter.pipe';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { PhonePipe } from './common/phone.pipe';
import { UserFormComponent } from './user-form/user-form.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    PlacesFilterPipe,
    WeatherCardComponent,
    PhonePipe,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
