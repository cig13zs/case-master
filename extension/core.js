;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CaseMaster = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function splitWords(str) {
    if (!str) return [];
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1 $2')
      .replace(/[-_./\\:]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 0);
  }

  function toCamelCase(str) {
    const words = splitWords(str);
    if (!words.length) return '';
    return words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  }

  function toPascalCase(str) {
    return splitWords(str).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  }

  function toSnakeCase(str) {
    return splitWords(str).map(w => w.toLowerCase()).join('_');
  }

  function toKebabCase(str) {
    return splitWords(str).map(w => w.toLowerCase()).join('-');
  }

  function toConstantCase(str) {
    return splitWords(str).map(w => w.toUpperCase()).join('_');
  }

  function toTitleCase(str) {
    return splitWords(str).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  }

  function toDotCase(str) {
    return splitWords(str).map(w => w.toLowerCase()).join('.');
  }

  function convertAll(str) {
    return {
      camelCase: toCamelCase(str),
      PascalCase: toPascalCase(str),
      snake_case: toSnakeCase(str),
      'kebab-case': toKebabCase(str),
      CONSTANT_CASE: toConstantCase(str),
      'Title Case': toTitleCase(str),
      'dot.case': toDotCase(str)
    };
  }

  return {
    splitWords: splitWords,
    toCamelCase: toCamelCase,
    toPascalCase: toPascalCase,
    toSnakeCase: toSnakeCase,
    toKebabCase: toKebabCase,
    toConstantCase: toConstantCase,
    toTitleCase: toTitleCase,
    toDotCase: toDotCase,
    convertAll: convertAll
  };
});
