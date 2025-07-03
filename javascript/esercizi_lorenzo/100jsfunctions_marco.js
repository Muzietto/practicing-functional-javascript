
function getHighestPaidEmployee(employees, departmentId) {
  return employees.reduce((acc, curr) => {
    if (curr.departmentId !== departmentId) return acc;
    if (!acc) return curr;
    if (acc.salary <= curr.salary) return curr.name;
    return acc;
  }, undefined);
}

function removeFirstAndLast(source, target) {
  const pieces = source.split(target);
  if (pieces === source) return source;
  if (pieces.length === 1) return pieces[0];
  if (pieces.length === 2) return pieces[0] + pieces[1];
  return [
    pieces[0] + pieces[1],
    ...pieces.slice(2, pieces.length - 2),
    pieces[pieces.length - 2] + pieces[pieces.length - 1]
  ].join(target);
}

// funzione senza else nè elseif
function groupBirthdays(users, groupBy) {
  var map = new Map();

  users.map(element => {
    const [record] = Object.entries(element)
      .filter(item => item.includes('birthday'));
    const [key1, value] = record;

    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const key = {
      year,
      month,
      day,
    }[groupBy];

    if (map.has(key)) (map.get(key)).push(element);
    if (!map.has(key)) map.set(key, [element])
  })

  return map;
}