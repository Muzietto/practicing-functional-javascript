import {
  diffReactions,
  rgbToHex,
  timeAgo,
  customArraySort,
} from './100jsfunctions_44-47';

describe('diffReactions', () => {
  it('return an Array of strings, describing what happened between yesterday and today', () => {
    expect(diffReactions({'sam_developer':['laugh'],'iampava':['like','laugh'],'jon31':['dislike']},
      {'sam_developer':['like'],'iampava':['like','laugh'],'jon31':['dislike','cry'],'jjames':['like']}
    ))
    .toEqual( expect.arrayContaining(['jon31 reacted with cry','sam_developer reacted with like',
      'sam_developer removed their laugh','jjames reacted with like']));
  });
});

describe('rgbToHex', () => {
  it('return the color in hexadecimal form', () => {
    expect(rgbToHex('rgb(8, 51, 68)'))
    .toEqual('#083344');
  });
});

describe('timeAgo', () => {
  it('return a string that describes the amount of time that has passed between those 2 dates', () => {
    expect(timeAgo('2024-02-01T10:00:00.000Z', '2024-02-01T10:00:30.000Z'))
    .toEqual('just now');
  });
});

describe('customArraySort', () => {
  it('return a new array that contains all elements, but sorted in a special order', () => {
    expect(customArraySort([{'id':'user3','age':50},{'id':'user8','age':50},{'id':'user5','age':49},
      {'id':'user2','age':18},{'id':'user9','age':17},{'id':'user10','age':13},{'id':'user11','age':14}
      ,{'id':'user13','age':34},{'id':'user14','age':30},{'id':'user12','age':35}],
       'user2'))
    .toEqual([{'id':'user2','age':18},{'id':'user5','age':49},{'id':'user12','age':35},
      {'id':'user9','age':17},{'id':'user11','age':14},{'id':'user10','age':13},
      {'id':'user3','age':50},{'id':'user8','age':50},{'id':'user13','age':34},
      {'id':'user14','age':30}]);
  });
});