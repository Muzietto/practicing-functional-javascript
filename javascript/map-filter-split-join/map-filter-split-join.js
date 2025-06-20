
export {
  removeChar,
  underscoreToCamelCase,
};

function removeChar(string, char) {
  return string
    .split('')
    .filter(c => c !== char)
    .join('');
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