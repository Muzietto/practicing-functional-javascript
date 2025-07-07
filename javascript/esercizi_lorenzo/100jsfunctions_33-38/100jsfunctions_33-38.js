export {
  getMissingContacts,
  removeFirstAndLast,
  biggestPowerOf2,
  areValuesUnique,
  rotateArray,
};

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

    for ([key, values] of contactsMap ) {
            newContacts = keys.reduce( (acc, current) => {
              acc = (current == key) ? [...acc] : (!values.includes(current) ? [ ...acc, current] : [...acc]);
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
    var [firstSub, restFirst] =  source.split(filter);

    if(restFirst == undefined) {
      filter = new RegExp(`${target}`);
      [firstSub, restFirst] =  source.split(filter);

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

    let tmp=1;
    let count = 0;

    while(tmp <= number) {
        tmp *= 2;
        count++;
    }

    return --count; 
}

/*
https://www.100jsfunctions.com/exercises/areValuesUnique

36.areValuesUnique
Write a function named areValuesUnique that receives an Array of numbers as parameter.

The function should return a boolean verifying if the array contains only unique numbers.
*/

function areValuesUnique(numbers) {
    const newSet = new Set(numbers);

    return numbers.length === newSet.size;
}

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
    if(items.length == 0) return items;

    while(n--) {
      let p = items.pop();
      items.unshift(p);
    }

    return items;
}
