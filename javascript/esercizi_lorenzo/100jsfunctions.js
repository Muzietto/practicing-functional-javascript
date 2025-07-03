/*
https://www.100jsfunctions.com/exercises/getHighestPaidEmployee

28.getHighestPaidEmployee
Write a function named getHighestPaidEmployee that receives 2 parameters:

employees - an Array of objects representing employees of a company. Each has the following properties

name - a string representing the name of the employee
departmentId - a string representing the ID of the department the employee works in
salary - a number representing the salary of the employee, per month
departmentId - a string representing the ID of a department

The function should return the name of the employee with the highest salary in the specified department.
 If no employee exists in that department return undefined.
*/
function getHighestPaidEmployee(employees, departmentId) {
  return employees.filter(
    (element) => (
      (element.salary === Math.max(
        ...employees.filter(
          (e) => (e.departmentId == departmentId)
        )
          .map((e) => e.salary)
      )
      )
    )
  ).reduce((acc, item) => (item.name), {})
} // risotto indigeribile; vedi mia soluzione - per di più la tua funzione non passa i test di 100jsfunctions.com

/*
https://www.100jsfunctions.com/exercises/flipObject

  29.flipObject. Write a function named flipObject that receives an Object describing people
   and their jobs and returns a new object with the jobs as keys, and names as values.
*/
function flipObject(people) {
  return Object.entries(people).reduce((acc, curr) => {
    const [key, value] = curr;

    acc = acc[value]
      ? {
        ...acc,
        [value]: [...Object.values(acc[value]), key],
      }
      : {
        ...acc,
        [value]: [key],
      }
    return acc;
  }, {})
} // excellent !!

/*
https://www.100jsfunctions.com/exercises/diffArrays

30.diffArrays
Write a function named diffArrays that receives 2 Arrays of numbers as parameters.
The function should return a new Array, that contains all numbers from the first array 
that are not in the second one, and all numbers from the second array that are not in the first one.
*/
function diffArrays(numbers1, numbers2) {
  return (numbers1.reduce((acc, current) => {
    acc = !numbers2.includes(current)
      ? [...acc, current]
      : [...acc];
    return acc;
  }, [])
    .concat(numbers2.reduce((acc, current) => {
      acc = !numbers1.includes(current)
        ? [...acc, current]
        : [...acc];
      return acc;
    }, []))
  )
} // good

/*
https://www.100jsfunctions.com/exercises/countPageViews

31.countPageViews
Write a function named countPageViews that receives 3 parameters:

pageViews - an Array of objects describing views of our page. Each object contains the number of views from a particular country,
 at a particular time and has the following properties:

  date - a Date
  country - a string representing a country code
  count - a number

country - a string representing a country code

interval - an object with 2 properties, startDate and endDate - each of them Dates

The function should return the number of page views from that country between those 2 dates (inclusive).
*/
function countPageViews(pageViews, country, interval) {
  return pageViews.filter(
    e => { // quando c'è solo un parametro in una arrow function, NON si mettono le tonde
      var startDate = new Date(interval.startDate);
      var endDate = new Date(interval.endDate);
      var currDate = new Date(e.date);

      return currDate >= startDate && currDate <= endDate;
    }
  ).reduce((acc, current) => {
    acc = current.country == country ? acc + current.count : acc;
    return acc;
  }, 0)
} // good

/*
https://www.100jsfunctions.com/exercises/linkedNumbersSum

32.linkedNumbersSum
Write a function named linkedNumbersSum that receives one parameter

an object representing the start node of a linked list. It has 2 properties:
value - representing a number
next - representing the next node in the linked list (or null if there is no next node)
The function should return the sum of all the numbers in the linked list.
*/
function linkedNumbersSum(node) {
  return (node.next == null)
    ? node.value
    : node.value + linkedNumbersSum(node.next);
} // good

/* 
https://www.100jsfunctions.com/exercises/getMissingContacts

33.getMissingContacts
Write a function named getMissingContacts that receives one parameter:

a Map of contacts, where the key is a string representing a userId and the value is an array of user ids - contactsMap
The function should return a new Map, where the values are the contacts missing from each user.
*/
function getMissingContacts(contactsMap) {
  var keys = [];

  for (const key of contactsMap.keys()) {
    keys.push(key);
  }

  const newMap = new Map();
  var newContacts = [];
  var values = [];
  let key;

  for ([key, values] of contactsMap) {
    newContacts = keys.reduce((acc, current) => {
      acc = (current == key)
        ? [...acc]
        : (!values.includes(current)
          ? [...acc, current]
          : [...acc]);
      return acc;
    }, [])
    newMap.set(key, newContacts);
  }

  return newMap;
}

/*
https://www.100jsfunctions.com/exercises/removeFirstAndLast

34.removeFirstAndLast
Write a function named removeFirstAndLast that receives 2 parameters:

a string named source
another string named target

and returns a new string created by removing from source the first and last appearances of target.
*/
function removeFirstAndLast(source, target) {

  var filter = new RegExp(`${target}(.+)`);
  var [firstSub, restFirst] = source.split(filter);

  if (restFirst == undefined) {
    filter = new RegExp(`${target}`);
    [firstSub, restFirst] = source.split(filter);

    return firstSub;
  }

  filter = new RegExp(`${target}(?!.*${target})`)
  var [middleSub, lastSub] = restFirst.split(filter);

  return firstSub + middleSub + lastSub;
}

/*
https://www.100jsfunctions.com/exercises/biggestPowerOf2

35.biggestPowerOf2
Write a new function named biggestPowerOf2 that receives a number as a parameter, and returns
 the biggest positive power of 2 that is less than or equal to this number.

If no positive power of 2 is less than or equal to the number, the function should return -1.
*/
function biggestPowerOf2(number) {

  let tmp = 1;
  let count = 0;

  while (tmp <= number) {
    tmp *= 2;
    count++;
  }

  return --count;
} // while should be avoided, ma in questo caso mi sembra la strada migliore... :-)

/*
https://www.100jsfunctions.com/exercises/areValuesUnique

36.areValuesUnique
Write a function named areValuesUnique that receives an Array of numbers as parameter.

The function should return a boolean verifying if the array contains only unique numbers.
*/
function areValuesUnique(numbers) {
  const newSet = new Set(numbers);

  return numbers.length === newSet.size;
} // molto elegante

/*
https://www.100jsfunctions.com/exercises/rotateArray

38.rotateArray
Write a function named rotateArray that receives 2 parameters:

an array of items - items
a number - n
The function should return a new array with the items rotated towards the right, by n positions.

NOTE: a rotation towards the right means that all elements of the array are moved to the next index,
 except for the last element which is moved to index=0.
*/
function rotateArray(items, n) {
  if (items.length == 0) return items;

  while (n--) {
    let p = items.pop();
    items.unshift(p);
  }

  return items;
} // inguardabile, ma molto smart :-) NB: a parte in casi astrusi come questo, pop e unshift sono PROIBITI

/*
https://www.100jsfunctions.com/exercises/getDaysInMonth

39.getDaysInMonth
Write a function named getDaysInMonth that receives a Date as a parameter,
 and returns the number of days in the month of the given date.
*/
function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return new Date(year, month, 0).getDate();
}

/*
https://www.100jsfunctions.com/exercises/formatDateTime

40.formatDateTime
Write a function named formatDateTime that receives two parameters:

a Date - date
a string representing a locale - locale
The function should return a new string, formatted according to the locale.
 See below examples for more details.

Hint: use the Intl.DateTimeFormat API
*/

function formatDateTime(date, locale) {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat(locale, options).format(date)
}

/*
https://www.100jsfunctions.com/exercises/toDecimal

41.toDecimal
Write a function named toDecimal that receives a string representing a number in
 binary notation and returns its value in decimal notation.

There's a built-in API that easily allows this conversation. So don't hesitate to look for it on MDN.
*/

function toDecimal(base2Number) {
  return parseInt(base2Number, 2);
}

/*
https://www.100jsfunctions.com/exercises/compareSets

42.compareSets
Write a function named compareSets that receives 2 parameters.

a Set of numbers - setA
a Set of numbers - setB
The function should compare the 2 sets and return an Object with the following properties:

onlyA - a Set with all elements inside setA that are not part of setB
onlyB - a Set with all elements inside setB that are not part of setA
union - a Set with all elements inside setA and setB
*/

function compareSets(setA, setB) {
  var obj = {}

  Object.assign(obj, { onlyA: setA.difference(setB) });
  Object.assign(obj, { onlyB: setB.difference(setA) });
  Object.assign(obj, { union: setA.union(setB) });

  return obj;
} // elegante

/*
https://www.100jsfunctions.com/exercises/groupBirthdays

43.groupBirthdays
Write a function named groupBirthdays that receives 2 parameters:

an Array of users each with 2 properties:
name - a string representing the user's name
birthday - a Date representing the user's birthday
a groupBy string with one of the following values - month, day, year
The function should group the users according to their birthdays
 and the groupBy parameter, and return a Map where the values are Arrays of users, and the keys are:

index of the month if groupBy='month' (starting from 1)
index of the day in a month if groupBy='day' (starting from 1)
year if the grouping string is groupBy='year'
*/
function groupBirthdays(users, groupBy) {
  var map = new Map();

  users.map(element => { // quando una arrow function ha solo un parametro, non ci vogliono le tonde
    const [record] = Object.entries(element)
      .filter(item => item.includes('birthday'));
    const [key1, value] = record;

    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let key = '';

    if (groupBy == 'year')
      key = year;
    else if (groupBy == 'month')
      key = month;
    else
      key = day;

    if (!map.has(key)) map.set(key, [element])
    else {
      (map.get(key)).push(element);
    }
  })

  return map;
} // else e soprattutto elseif sono proibiti - vedi mia soluzione

/*
https://www.100jsfunctions.com/exercises/diffReactions

44.diffReactions
Write a function named diffReactions that receives 2 parameters:

an Object representing the reactions a blog post had yesterday - yesterdayReactions
an Object representing the reactions that same blog post has today - todayReactions
Both parameters have the same structure:

each key represents the ID of a user
each value is an Array of strings, representing the reactions that user sent. Every reaction is
 one of the following: like, dislike, laugh, cry.
The function should return an Array of strings, describing what happened between yesterday
 and today. The strings should be in the following format:

<user_id> reacted with <reaction> if this user added a new reaction today
<user_id> removed their <reaction> if this user reacted yesterday but today removed that reaction
The order of the items in the returned Array is not important.

*/
function diffReactions(yesterdayReactions, todayReactions) {
  console.log(todayReactions);
  console.log(yesterdayReactions);

  var reactions = [];

  if (Object.keys(todayReactions).length === 0) {
    Object.keys(yesterdayReactions).map((user) => {
      var yesterday = new Set(yesterdayReactions[user]);
      yesterday.forEach((value) =>
        reactions.push(user + ' removed their ' + value)
      )
    })

    return reactions;
  }

  Object.keys(todayReactions).map((user) => {
    var today = new Set(todayReactions[user]);
    var yesterday = new Set(yesterdayReactions[user]);

    if (today.isDisjointFrom(yesterday)) {
      today.forEach((value) =>
        reactions.push(user + ' reacted with ' + value)
      )

      yesterday.forEach((value) =>
        reactions.push(user + ' removed their ' + value)
      )
    }
    else if (today.difference(yesterday).size > 0) {
      today.difference(yesterday).forEach((value) =>
        reactions.push(user + ' reacted with ' + value)
      )

      var removed = (today.symmetricDifference(yesterday)).difference(today);
      removed.forEach(value => {
        reactions.push(user + ' removed their ' + value)
      })
    }
  }
  )

  if ((new Set(Object.keys(todayReactions))).isDisjointFrom(new Set(Object.keys(yesterdayReactions)))) {
    Object.keys(yesterdayReactions).map((user) => {
      var yesterday = new Set(yesterdayReactions[user]);

      yesterday.forEach((value) =>
        reactions.push(user + ' removed their ' + value)
      )
    })
  }

  return reactions;
}

/*
https://www.100jsfunctions.com/exercises/rgbToHex

45.rgbToHex
Write a function named rgbToHex that receives one parameter

a string representing a color in RGB form - rgbColor. 
The string has the following format: rgb(r, g, b), where r, g and b are numbers between 0-255.
The function should return the color in hexadecimal form.
*/

function rgbToHex(rgbColor) {
  const [str1, str2] = rgbColor.split('(');
  var [r, g, b] = str2.split(',');

  r = r.trim();
  g = g.trim();
  b = b.split(')')[0].trim();

  return '#' + Number(r).toString(16).padStart(2, '0') + Number(g).toString(16).padStart(2, '0') + Number(b).toString(16).padStart(2, '0');
}

/*
https://www.100jsfunctions.com/exercises/timeAgo

46.timeAgo
Write a function named timeAgo that receives 2 Dates as parameters.

The function should return a string that describes the amount of time that has passed between those 2 dates, following this format:

if less than a minute has passed, return 'just now'
if less than an hour has passed, return 'x minutes ago'
if less than a day has passed, return 'x hours ago'
if less than a month has passed, return 'x days ago' (we can consider a month having 30 days)
if less than a year has passed, return 'x months ago'
else, return 'more than a year ago'
*/

function timeAgo(date1, date2) {
  const dateFirst = new Date(date1);
  const dateLast = new Date(date2);

  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const MONTHS = DAYS * 30;

  const isFractional = (number) => {
    return (number < 1) && (number % 1 != 0);
  }

  var dateDiff;

  if (dateLast > dateFirst) {
    dateDiff = (dateLast - dateFirst);
  } else dateDiff = (dateFirst - dateLast);

  var check = dateDiff / SECONDS;

  if (check < 60) {
    var result;
    var res = Math.floor(check);

    return 'just now';
  }

  check = dateDiff / MINUTES;

  if (check < 60) {
    var result;
    var res = Math.floor(check);
    (res == 1) ? result = res + ' minute ago' : result = res + ' minutes ago';

    return result;
  }

  check = dateDiff / HOURS;

  if (check < 24) {
    var result;
    var res = Math.floor(check);
    (res == 1) ? result = res + ' hour ago' : result = res + ' hours ago';

    return result;
  }

  check = dateDiff / DAYS;

  if (check < 30) {
    var result;
    var res = Math.floor(check);
    (res == 1) ? result = res + ' day ago' : result = res + ' days ago';

    return result;
  }

  check = dateDiff / MONTHS;

  if (check < 12) {
    var result;
    var res = Math.floor(check);
    (res == 1) ? result = res + ' month ago' : result = res + ' months ago';

    return result;
  }

  return 'more than a year ago';
}

/*
https://www.100jsfunctions.com/exercises/customArraySort

47.customArraySort
Write a function named customArraySort that receives 2 parameters:

an Array of objects, each with 2 properties:

id: string
age: number
currentUserId: string

The function should return a new array that contains all elements, but sorted in a special order:

Current user
All users between 35 (inclusive) - 50 (exclusive)
All users under 18 (exclusive)
All users over 50 (inclusive)
All users between 18 (inclusive) - 35 (exclusive)
Inside every interval, the users are sorted descending by age.
*/

function customArraySort(users, currentUserId) {
  var result = [];
  var filtered = users.filter(u => u.id == currentUserId);
  var usrs = (new Set(users).difference(new Set(filtered)));
  usrs = Array.from(usrs);

  result.push(...filtered);

  filtered = usrs.filter(u => u.age >= 35 && u.age < 50).sort((a, b) => b.age - a.age);
  result.push(...filtered);

  filtered = usrs.filter(u => u.age < 18).sort((a, b) => b.age - a.age);
  result.push(...filtered);

  filtered = usrs.filter(u => u.age >= 50).sort((a, b) => b.age - a.age);
  result.push(...filtered);

  filtered = usrs.filter(u => u.age >= 18 && u.age < 35).sort((a, b) => b.age - a.age);
  result.push(...filtered);

  return result;
}
