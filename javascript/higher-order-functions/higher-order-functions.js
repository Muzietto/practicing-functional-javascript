export {
  getDoubleN,
  createCounter,
}

// https://www.100jsfunctions.com/exercises/getDoubleN
function getDoubleN(n) {
    let _n = n;
    return () => {
        _n = 2*_n;
        return _n
    }
}

// https://www.100jsfunctions.com/exercises/createCounter
function createCounter(initialValue) {
    let _value = initialValue;
    return {
        getValue: () => _value,
        increment: () => { _value += 1; },
        decrement: () => { _value -= 1; }
    };
}