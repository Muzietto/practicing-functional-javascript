export {
  getHighestPaidEmployee,
  flipObject,
  diffArrays,
  countPageViews,
  linkedNumbersSum,
};

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
                                   ).map((e) => e.name)[0]
}


/*
https://www.100jsfunctions.com/exercises/flipObject

  29.flipObject. Write a function named flipObject that receives an Object describing people
   and their jobs and returns a new object with the jobs as keys, and names as values.
*/

function flipObject(people) {
    return Object.entries(people).reduce((acc, curr) => {
        const [key, value] = curr;

        acc = acc[value] ?  
         { 
           ...acc,
           [value]: [...Object.values(acc[value]), key] 
         } :
         {
          ...acc,
          [value] : [key]
         } 
        return acc;
    }, {})
}

/*
https://www.100jsfunctions.com/exercises/diffArrays

30.diffArrays
Write a function named diffArrays that receives 2 Arrays of numbers as parameters.
The function should return a new Array, that contains all numbers from the first array 
that are not in the second one, and all numbers from the second array that are not in the first one.
*/


function diffArrays(numbers1, numbers2) {
    return ( numbers1.reduce( (acc, current) => {
          acc = !numbers2.includes(current) ? [ ...acc, current] : [...acc];
          return acc;
         }, [])
    
         .concat( numbers2.reduce( (acc, current) => {
          acc = !numbers1.includes(current) ? [ ...acc, current] : [...acc];
          return acc;
         }, []))
     )
}


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
          (e) => {
            var startDate = new Date(interval.startDate);
            var endDate = new Date(interval.endDate);
            var currDate = new Date(e.date);

            return currDate >= startDate && currDate <= endDate;
          }
         ).reduce( (acc, current) => {
            acc = current.country == country ? acc + current.count : acc;
            return acc;
         }, 0)
}


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
  return (node.next == null) ? node.value : node.value + linkedNumbersSum(node.next);
}
