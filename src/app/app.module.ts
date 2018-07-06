import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainCardComponent } from './places-info/main-card/main-card.component';
import { PlacesFilterPipe } from './common/pipes/places-filter.pipe';
import { WeatherCardComponent } from './places-info/weather-card/weather-card.component';
import { PhonePipe } from './common/pipes/phone.pipe';
import {SocialCardComponent} from './places-info/social-card/social-card.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { PlacesInfoComponent } from './places-info/places-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './user-forms/sign-up/sign-up.component';
import { SignInComponent } from './user-forms/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    PlacesFilterPipe,
    WeatherCardComponent,
    SocialCardComponent,
    PhonePipe,
    PlacesInfoComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
