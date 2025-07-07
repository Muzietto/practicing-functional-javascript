export {
  getDaysInMonth,
  formatDateTime,
  toDecimal,
  compareSets,
  groupBirthdays,
};

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
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
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

  Object.assign(obj, { onlyA: setA.difference(setB)});
  Object.assign(obj, { onlyB: setB.difference(setA)});
  Object.assign(obj, { union: setA.union(setB)});

  return obj;
   
}

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

index of the month if groupBy="month" (starting from 1)
index of the day in a month if groupBy="day" (starting from 1)
year if the grouping string is groupBy="year"
*/


function groupBirthdays(users, groupBy) {
    var map = new Map();

    users.map( (element) => {
        const [record] = Object.entries(element).filter( item => item.includes('birthday'));
        const [key1, value] = record;

        let date = new Date(value);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let key = '';

        if(groupBy == 'year')
          key = year;
        else if(groupBy == 'month')
          key = month;
        else
          key = day;

        if(!map.has(key)) map.set(key, [element]) 
          else {
                (map.get(key)).push(element);
          }
    }) 

    return map;
}
