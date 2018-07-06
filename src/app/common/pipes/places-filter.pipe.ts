import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../../info-mock';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: Place[], type: string): any {
      return places.filter((place: Place) => {
        if (place.type === type.toLowerCase()) {
          console.log(type);
          return place;
        }
      });
  }
}
