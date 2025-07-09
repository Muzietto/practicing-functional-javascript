import {
  oneToFive,
  oneToFiveUsingThunks,
} from './esercizi_marco_lorenzo';

describe('oneToFive', () => {
  it('returns five different values at each invocation -  Test 1', () => {
    expect(oneToFive()).toEqual(1);
  });

  it('returns five different values at each invocation -  Test 2', () => {
    expect(oneToFive()).toEqual(2);
  });

  it('returns five different values at each invocation -  Test 3', () => {
    expect(oneToFive()).toEqual(3);
  });

  it('returns five different values at each invocation -  Test 4', () => {
    expect(oneToFive()).toEqual(4);
  });

  it('returns five different values at each invocation -  Test 5', () => {
    expect(oneToFive()).toEqual(5);
  });

  it('returns five different values at each invocation -  Test 6', () => {
    expect(oneToFive()).toEqual(5);
  });

  it('returns five different values at each invocation -  Test 7', () => {
    expect(oneToFive()).toEqual(5);
  });
});

const oneToFiveThunk = oneToFiveUsingThunks();

describe('oneToFiveUsingThunks', () => {
  it('returns five different values at each invocation -  Test 1', () => {
    expect(oneToFiveThunk()).toEqual(1);
  });

  it('returns five different values at each invocation -  Test 2', () => {
    expect(oneToFiveThunk()).toEqual(2);
  });

  it('returns five different values at each invocation -  Test 3', () => {
    expect(oneToFiveThunk()).toEqual(3);
  });

  it('returns five different values at each invocation -  Test 4', () => {
    expect(oneToFiveThunk()).toEqual(4);
  });

  it('returns five different values at each invocation -  Test 5', () => {
    expect(oneToFiveThunk()).toEqual(5);
  });

  it('returns five different values at each invocation -  Test 6', () => {
    expect(oneToFiveThunk()).toEqual(5);
  });

  it('returns five different values at each invocation -  Test 7', () => {
    expect(oneToFiveThunk()).toEqual(5);
  });
});