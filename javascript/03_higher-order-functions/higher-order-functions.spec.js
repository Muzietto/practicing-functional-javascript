import {
  getDoubleN,
  createCounter,
} from './higher-order-functions';

describe('getDoubleN', () => {
  it('doubles the output at each invocation', () => {
    const hundredMore = getDoubleN(100);
    expect(hundredMore()).toEqual(200);
    expect(hundredMore()).toEqual(400);
    expect(hundredMore()).toEqual(800);
  });
});

describe('createCounter', () => {
  it('returns a very smart object', () => {
    const myCounter = createCounter(100);
    expect(myCounter.getValue()).toEqual(100);

    myCounter.increment()
    expect(myCounter.getValue()).toEqual(101);

    myCounter.decrement()
    expect(myCounter.getValue()).toEqual(100);
  });
});
