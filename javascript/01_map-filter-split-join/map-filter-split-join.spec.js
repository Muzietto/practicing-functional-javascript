import {
  removeChar,
  capitalize,
  replacer,
  simpleUrlAnalyzer,
  underscoreToCamelCase,
} from './map-filter-split-join';

describe('removeChar', () => {
  it('does simple things', () => {
    expect(removeChar('CIAO MAMMA', 'M'))
    .toEqual('CIAO AA');
  });
});

describe('capitalize', () => {
  it('capitalizes', () => {
    expect(capitalize('ciao'))
    .toEqual('Ciao');
  });
});

describe('replacer', () => {
  it('replaces chars', () => {
    expect(replacer('ciao mamma mia', ' ', '*'))
    .toEqual('ciao*mamma*mia');
  });
});

describe('simpleUrlAnalyzer', () => {
  it('analyzes simple urls', () => {
    expect(simpleUrlAnalyzer('https://www.pippo.com/qweqwe?asd=123&ert=true'))
    .toEqual({
      protocol: 'https',
      node: 'www.pippo.com',
      resource: 'qweqwe',
      params: 'asd=123&ert=true'
    });
  });
});

describe('underscoreToCamelCase', () => {
  it('does complex things', () => {
    expect(underscoreToCamelCase('CIAO_MAMMA'))
    .toEqual('CiaoMamma');
  });
});