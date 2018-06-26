import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phoneNum: number): string {
    const countryCode = phoneNum.toString().slice(0, 3);
    const cityCode = phoneNum.toString().slice(3, 6);
    const phone = phoneNum.toString().slice(6, -1);
    return '+' + countryCode + ' ' + cityCode + ' ' + phone;
  }
}
