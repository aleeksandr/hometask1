import {Component, OnDestroy} from '@angular/core';
import {Place} from '../../info-mock';
import {Subscription} from 'rxjs';
import {MessageService} from '../../common/services/message.service';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent implements OnDestroy {
  private subscription: Subscription;
  place: Place;
  constructor(private messageService: MessageService) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(place => { this.place = place; console.log(place); });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
