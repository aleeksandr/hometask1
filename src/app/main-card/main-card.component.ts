import { Component, OnInit } from '@angular/core';
import { Place, places$ } from '../info-mock';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  public mainImg: string;
  public defaultImg = '../assets/img/default-img.jpg';
  constructor() { }

  public places: Observable<Place[]> = places$;
  public types = ['diving', 'walking', 'eating'];
  getImg(event) {
    console.log(event);
    this.mainImg = event.srcElement.src;
  }
  ngOnInit() {
  }

}
