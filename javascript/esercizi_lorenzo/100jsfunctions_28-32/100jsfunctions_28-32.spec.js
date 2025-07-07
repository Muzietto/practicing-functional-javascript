import {
  getHighestPaidEmployee,
  flipObject,
  diffArrays,
  countPageViews,
  linkedNumbersSum,
} from './100jsfunctions_28-32';

describe('getHighestPaidEmployee', () => {
  it('return the name of the employee with the highest salary in the specified department', () => {
    expect(getHighestPaidEmployee([
        {'departmentId':'A110','name':'Alice','salary':7611},
        {'departmentId':'A110','name':'Bob','salary':9288},
        {'departmentId':'A504','name':'Charlie','salary':4109},
        {'departmentId':'A504','name':'David','salary':6100}],
          'A504')
        )
    .toEqual('David');
  });
});

describe('flipObject', () => {
  it('returns a new object with the jobs as keys, and names as values', () => {
    expect(flipObject({'nick':'UX Designer','bob':'JS Developer','jon':'JS Developer','alice':'AI Engineer'}))
    .toEqual({'JS Developer':['bob','jon'],'AI Engineer':['alice'],'UX Designer':['nick']});
  });
});

describe('diffArrays', () => {
  it('returns the difference between two arrays', () => {
    expect(diffArrays([11,96,103,-5,0,12,1], [0,1,2,3,4,5]))
    .toEqual([11,96,103,-5,12,2,3,4,5]);
  });
});

describe('countPageViews', () => {
  it('countPageViews', () => {
    expect(countPageViews([{'date':'2023-05-10T10:00:00.000Z','country':'RO','count':104},
      {'date':'2023-05-05T10:00:00.000Z','country':'USA','count':151},
      {'date':'2023-05-07T10:00:00.000Z','country':'RO','count':67},
      {'date':'2023-05-10T10:00:00.000Z','country':'CA','count':89},
      {'date':'2023-05-12T12:00:00.000Z','country':'RO','count':500}],
      'RO',
      {'endDate':'2023-05-12T10:00:00.000Z',
      'startDate':'2023-05-01T10:00:00.000Z'}
    ))
    .toEqual(171);
  });
});

describe('linkedNumbersSum', () => {
  it('return the sum of all the numbers in the linked list', () => {
    expect(linkedNumbersSum({'next':{'next':{'next':null,'value':3},'value':2},'value':1}))
    .toEqual(6);
  });
});