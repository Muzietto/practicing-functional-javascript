export {
  complexUrlAnalyzer,
  arrayToObject,
  pickFields,
};

function complexUrlAnalyzer() {
  // TODO - implement me !!!
}

// https://www.100jsfunctions.com/exercises/arrayToObject
function arrayToObject(strings) {
  const result = strings
    .reduce((acc, curr) => {
      acc = {
        ...acc,
        [curr]: strings.indexOf(curr),
      };
      return acc;
    }, {});
  return result;
}

// https://www.100jsfunctions.com/exercises/pickFields
function pickFields(data, fields) {
  return fields.reduce((acc, curr) => {
    acc = (data[curr])
      ? {
        ...acc,
        [curr]: data[curr],
      }
      : acc;
    return acc;
  }, {})
}

// ['ciao','mamma','ciao'] -> { ciao:1 } -> { ciao:1, mamma:1 } -> { ciao:2, mamma:1 }
function xxxx(arra) {
  return arra.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr])
        ? acc[curr] + 1
        : 1,
    }
  }, {});
}


