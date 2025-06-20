import {
  removeChar,
  underscoreToCamelCase,
} from './map-filter-split-join';

describe('removeChar', () => {
  it('does simple things', () => {
    expect(removeChar('CIAO MAMMA', 'M'))
    .toEqual('CIAO AA');
  });
});

describe('underscoreToCamelCase', () => {
  it('does complex things', () => {
    expect(underscoreToCamelCase('CIAO_MAMMA'))
    .toEqual('CiaoMamma');
  });
});