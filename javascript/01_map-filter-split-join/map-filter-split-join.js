
export {
  removeChar,
  capitalize,
  replacer,
  simpleUrlAnalyzer,
  underscoreToCamelCase,
};

function removeChar(string, char) {
  return string
    .split('')
    .filter(c => c !== char)
    .join('');
}

function capitalize(string) {
  return string
    .split('')
    .map((char, index) => (index === 0) ? char.toUpperCase() : char)
    .join('');
}

function replacer(string, oldChar, newChar) {
  return string
    .split(oldChar)
    .join(newChar);
}

// https://www.pippo.com/qweqwe?asd=123&ert=true
function simpleUrlAnalyzer(url) {
  const [protocol, restOfUrl] = url.split('://');
  const [domain, params] = restOfUrl.split('?');
  const [node,resource] = domain.split('/');
  return {
    protocol,
    node,
    resource,
    params,
  }
}

function underscoreToCamelCase(string) {
  return string
    .split('_')
    .map(s => s
      .split('')
      .map(char => char.toLowerCase())
      .map((char, index) => (index === 0)
        ? char.toUpperCase()
        : char)
      .join(''))
    .join('');
}