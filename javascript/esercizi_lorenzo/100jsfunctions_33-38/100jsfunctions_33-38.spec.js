import {
  getMissingContacts,
  removeFirstAndLast,
  biggestPowerOf2,
  areValuesUnique,
  rotateArray,
} from './100jsfunctions_33-38';

describe('getMissingContacts', () => {
  it('return a new Map, where the values are the contacts missing from each user', () => {
    expect(getMissingContacts(new Map( [  ['user1', ['user2', 'user3']], ['user2', []], ['user3', []]  ]))
        )
    .toEqual(new Map( [  ['user1', []], ['user2', ['user1', 'user3']], ['user3', ['user1', 'user2']]  ]));
  });
});

describe('removeFirstAndLast', () => {
  it('returns a new string created by removing from source the first and last appearances of target', () => {
    expect(removeFirstAndLast('Hello World', 'l')
        )
    .toEqual('Helo Word');
  });
});

describe('biggestPowerOf2', () => {
  it('returns the biggest positive power of 2 that is less than or equal to this number', () => {
    expect(biggestPowerOf2(12)
        )
    .toEqual(3);
  });
});

describe('areValuesUnique', () => {
  it('return a boolean verifying if the array contains only unique numbers', () => {
    expect(areValuesUnique([4,6,-8,14])
        )
    .toEqual(true);
  });
});

describe('rotateArray', () => {
  it('return a new array with the items rotated towards the right, by n positions', () => {
    expect(rotateArray(['Bob',71,{'name':'JavaScript','type':'programming_language'}], 2)
        )
    .toEqual([71,{'name':'JavaScript','type':'programming_language'},'Bob']);
  });
});