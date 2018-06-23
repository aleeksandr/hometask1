import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { PlacesFilterPipe } from './common/places-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule
    , BrowserAnimationsModule
    // , NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
