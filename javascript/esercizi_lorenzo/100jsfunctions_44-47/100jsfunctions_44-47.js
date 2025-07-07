export {
  diffReactions,
  rgbToHex,
  timeAgo,
  customArraySort,
};

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
    var reactions = [];

    if(Object.keys(todayReactions).length === 0) {
      Object.keys(yesterdayReactions).map( (user) => {
            var yesterday = new Set(yesterdayReactions[user]);
            yesterday.forEach( (value) => 
                reactions.push(user + ' removed their ' + value)
            )
      })

      return reactions;
    }

    Object.keys(todayReactions).map ( (user) => {
            var today = new Set(todayReactions[user]);
            var yesterday = new Set(yesterdayReactions[user]);

            if(today.isDisjointFrom(yesterday)) { 
                    today.forEach( (value) => 
                      reactions.push(user + ' reacted with ' + value)
                    )

                    yesterday.forEach( (value) =>
                      reactions.push(user + ' removed their ' + value)
                  )
            }
            else if(today.difference(yesterday).size > 0) {
                   today.difference(yesterday).forEach( (value) => 
                      reactions.push(user + ' reacted with ' + value)
                    ) 
             
                  var removed = (today.symmetricDifference(yesterday)).difference(today);
                  removed.forEach( value => {
                    reactions.push(user + ' removed their ' + value)
                  }) 
            }        
         }
    )

    if((new Set(Object.keys(todayReactions))).isDisjointFrom(new Set(Object.keys(yesterdayReactions)))) { 
          Object.keys(yesterdayReactions).map ( (user) => {
            var yesterday = new Set(yesterdayReactions[user]);

            yesterday.forEach( (value) =>
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

if less than a minute has passed, return "just now"
if less than an hour has passed, return "x minutes ago"
if less than a day has passed, return "x hours ago"
if less than a month has passed, return "x days ago" (we can consider a month having 30 days)
if less than a year has passed, return "x months ago"
else, return "more than a year ago"
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

    if(dateLast > dateFirst) {
       dateDiff = (dateLast - dateFirst);
    } else dateDiff = (dateFirst - dateLast);

    var check = dateDiff / SECONDS;

    if(check < 60) {
       var result;
       var res = Math.floor(check);

       return "just now";
    }

    check = dateDiff / MINUTES;

    if(check < 60) {
       var result;
       var res = Math.floor(check);
       (res == 1) ?  result = res + " minute ago" : result = res + " minutes ago";

       return result;
    }

    check = dateDiff / HOURS;

    if(check < 24) { 
       var result;
       var res = Math.floor(check);
       (res == 1) ?  result = res + " hour ago" : result = res + " hours ago";

       return result;    
    }

    check = dateDiff / DAYS;

    if(check < 30) { 
       var result;
       var res = Math.floor(check);
       (res == 1) ?  result = res + " day ago" : result = res + " days ago";

       return result;
    }

    check = dateDiff / MONTHS;

    if(check < 12) { 
       var result;
       var res = Math.floor(check);
       (res == 1) ?  result = res + " month ago" : result = res + " months ago";

       return result;    }

    return "more than a year ago";
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
    var filtered = users.filter( u => u.id == currentUserId);
    var usrs = (new Set(users).difference( new Set(filtered)));
    usrs = Array.from(usrs);

    result.push(...filtered);

    filtered = usrs.filter( u => u.age >= 35 && u.age < 50).sort( (a, b) =>  b.age - a.age);
    result.push(...filtered);

    filtered = usrs.filter( u => u.age < 18).sort( (a, b) =>  b.age - a.age);
    result.push(...filtered);

    filtered = usrs.filter( u => u.age >= 50).sort( (a, b) =>  b.age - a.age);
    result.push(...filtered);    

    filtered = usrs.filter( u => u.age >= 18 && u.age < 35).sort( (a, b) =>  b.age - a.age);
    result.push(...filtered);

    return result;
}
