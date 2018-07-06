import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    const expected = '+947 483 9';
    const number = 94748395;
    expect(pipe.transform(number)).toEqual(expected);
  });
});
