import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export interface Place {
  img: string;
  address: string;
  phone:  number; // дополнительно задание pipe для форматирования
  weather: {
    title: string,
    water: number,
    temperature: number
  };
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  };
  type: string;
}

export const places: Place[] = [
  {
    'img': 'assets/img/Blue-Hole.jpg',
    'address': 'Lighthouse Reef Airstrip, Belize',
    'phone': 17785089821,
    'weather': {'title': 'Cloudy', 'water': 23, 'temperature': 28},
    'social_info': {'title': 'Great Blue Hole', 'img': 'assets/img/diving-great-blue-hole.jpg', 'followers': 3560, 'following': 117},
    'type': 'diving'
  }, {
    'img': 'assets/img/diving-shark-reef.jpg',
    'address': 'Sharm Ash Sheikh, Egypt',
    'phone': 20693660559,
    'weather': {'title': 'Sunny', 'water': 27, 'temperature': 38},
    'social_info': {'title': 'Shark Reef', 'img': 'assets/img/diving-shark-reef-2.jpg', 'followers': 2788, 'following': 345},
    'type': 'diving'
  }, {
    'img': 'assets/img/walking-lake-district.jpg',
    'address': 'Cumbria, England',
    'phone': 441539724555,
    'weather': {'title': 'Cloudy', 'water': 15, 'temperature': 12},
    'social_info': {'title': 'Lake District Park', 'img': 'assets/img/walking-lake-district-2.jpg', 'followers': 1734, 'following': 96},
    'type': 'walking'
  }, {
    'img': 'assets/img/walking-attersee.jpg',
    'address': 'Nusdorf-am-Attersee, Austria',
    'phone': 43766680050,
    'weather': {'title': 'Rainy', 'water': 18, 'temperature': 21},
    'social_info': {'title': 'Attersee Lake', 'img': 'assets/img/walking-nussdorf-am-attersee.jpg', 'followers': 2314, 'following': 191},
    'type': 'walking'
  }, {
    'img': 'assets/img/eating-osteria.jpg',
    'address': 'Via Stella, 22, Modena, Italy',
    'phone': 39059223912,
    'weather': {'title': 'Windy', 'water': null, 'temperature': 33},
    'social_info': {
      'title': 'Osteria Francescana',
      'img': 'assets/img/eating-osteriafrancescana-2.jpg',
      'followers': 784000,
      'following': 180
    },
    'type': 'eating'
  }, {
    'img': 'assets/img/eating-mirazur.jpg',
    'address': 'Aristide Briand, 30, Menton, France',
    'phone': 330492418686,
    'weather': {'title': 'Rainy', 'water': 24, 'temperature': 28},
    'social_info': {'title': 'Restaurant Mirazur', 'img': 'assets/img/eating-mirazur-2.jpg', 'followers': 50800, 'following': 365},
    'type': 'eating'
  }
];

