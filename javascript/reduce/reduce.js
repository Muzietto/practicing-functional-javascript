export { 
  arrayToObject,
  pickFields,
};

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
        acc = data[curr]
            ? {
                ...acc,
                [curr]: data[curr],
            }
            : acc;
        return acc;
    }, {})
}


