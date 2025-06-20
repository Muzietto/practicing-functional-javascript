import {
  complexUrlAnalyzer,
  arrayToObject,
  pickFields,
} from './reduce';

xdescribe('complexUrlAnalyzer', () => {
  it('analyzes complex urls', () => {
    expect(complexUrlAnalyzer('http://www.pippo.com/customers/delete/123123?qwe=123&ert=false&qwe=456'))
    .toEqual({
      protocol: 'https',
      node: 'www.pippo.com',
      resource: '/customers/delete/123123',
      params: {
        ert: false,
        qwe: [123, 456],
      }
    });  
  });
});

describe('pickFields', () => {
  const data = {
    name: 'Marco',
    age: 62,
  };

  it('picks existing fields in objects', () => {
    expect(pickFields(data, ['age']))
    .toEqual({ age: 62 });  
  });

  it('discards non-existing fields in objects', () => {
    expect(pickFields(data, ['name', 'height']))
    .toEqual({ name: 'Marco' });  
  });
});

describe('arrayToObject', () => {

  it('handles arrays with NO duplicates', async () => {
    expect(arrayToObject([
      'ciao',
      'mamma',
    ]))
      .toEqual({
        ciao: 0,
        mamma: 1,
      });
  });

  it('handles arrays WITH duplicates', async () => {
    expect(arrayToObject([
      'ciao',
      'ciao',
      'mamma',
    ]))
      .toEqual({
        ciao: 0,
        mamma: 2,
      });
  });
});
