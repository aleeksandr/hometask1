import { Component } from '@angular/core';
import { Place, places } from '../info-mock';
import { MessageService } from '../common/services/message.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  public mainImg: string;
  public defaultImg = '../assets/img/default-img.jpg';
  constructor(private messageService: MessageService) {}

  public places: Place[] = places;
  public types = ['diving', 'walking', 'eating'];

  sendMessage(place: Place): void {
    this.messageService.sendMessage(place);
    this.mainImg = place.img;
    console.log(place);
  }
  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
