import {Component, OnDestroy} from '@angular/core';
import { MessageService } from '../../common/services/message.service';
import {Place} from '../../info-mock';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnDestroy {
  private subscription: Subscription;
  place: Place;
  constructor(private messageService: MessageService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(place => { this.place = place; console.log(place); });
    this.matIconRegistry.addSvgIcon('cloudy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg')
    );
    this.matIconRegistry.addSvgIcon('rainy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/rain.svg')
    );
    this.matIconRegistry.addSvgIcon('sunny',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')
    );
    this.matIconRegistry.addSvgIcon('windy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/wind.svg')
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
