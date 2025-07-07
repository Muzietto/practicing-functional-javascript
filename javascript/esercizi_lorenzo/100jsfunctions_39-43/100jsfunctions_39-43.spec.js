import {
  getDaysInMonth,
  formatDateTime,
  toDecimal,
  compareSets,
  groupBirthdays,
} from './100jsfunctions_39-43';

describe('getDaysInMonth', () => {
  it('returns the number of days in the month of the given date', () => {
    expect(getDaysInMonth(new Date('2024-02-15T10:00:00.000Z')))
    .toEqual(29);
  });
});

describe('formatDateTime', () => {
  it('return a new string, formatted according to the locale. See below examples for more details', () => {
    expect(formatDateTime(new Date ('2024-05-22T19:37:00.000Z'), 'es-ES'))
    .toEqual('22 de mayo de 2024, 21:37');
  });
});

describe('toDecimal', () => {
  it('returns its value in decimal notation', () => {
    expect(toDecimal('1000111'))
    .toEqual(71);
  });
});

describe('compareSets', () => {
  it('returns Set instructions', () => {
    expect(compareSets(new Set([ 1, 2, 3, 4 ]), new Set([ 3, 4, 5, 6 ])))
    .toEqual({'onlyA': new Set([1, 2]), 'onlyB': new Set([5, 6]), 'union': new Set([1, 2, 3, 4, 5, 6])});
  });
});

describe('groupBirthdays', () => {
  const resultMap = new Map();
  resultMap.set(1993, [{'birthday': '1993-05-10T10:00:00.000Z', 'name': 'Lisa'}, {'birthday': '1993-08-01T06:00:00.000Z', 'name': 'Maggy'}]);
  resultMap.set(1995, [{'birthday': '1995-01-10T11:35:00.000Z', 'name': 'Sam'}]);

  it('The function should group the users according to their birthdays and the groupBy parameter', () => {
    expect(groupBirthdays([{'birthday':'1993-05-10T10:00:00.000Z','name':'Lisa'},
      {'birthday':'1993-08-01T06:00:00.000Z','name':'Maggy'},
      {'birthday':'1995-01-10T11:35:00.000Z','name':'Sam'}],
      'year'
    ))
    .toEqual(resultMap);
  });
});