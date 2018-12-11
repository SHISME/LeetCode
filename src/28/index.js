/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var buildPatternTable = function (word) {
    let patternTable = [0];
    let prefix = 0;
    let suffix = 1;
    while (suffix < word.length) {
      if (word[prefix] === word[suffix]) {
        patternTable[suffix] = prefix + 1;
        suffix++;
        prefix++;
      } else if (prefix === 0) {
        patternTable[suffix] = 0;
        suffix++;
      } else {
        prefix = patternTable[prefix - 1];
      }
    }
    return patternTable;
  };
  const patternTable = buildPatternTable(needle);
  let i = 0, j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i ++;
      j ++;
    } else if (j === 0) {
      i ++;
    } else {
      j = patternTable[j - 1];
    }
  }
  if (j === needle.length) {
    return i - j;
  }
  return -1;
};
/**
 * @param {string} word 
 */
var buildPatternTable = function (word) {
  let patternTable = [0];
  let prefix = 0;
  let suffix = 1;
  while (suffix < word.length) {
    if (word[prefix] === word[suffix]) {
      patternTable[suffix] = prefix + 1;
      suffix++;
      prefix++;
    } else if (prefix === 0) {
      patternTable[suffix] = 0;
      suffix++;
    } else {
      prefix = patternTable[prefix - 1];
    }
  }
  return patternTable;
}
let a = 'abbababa';
console.log(strStr(a, 'bba') === a.indexOf('bba'));
console.log(strStr(a, 'aba') === a.indexOf('aba'));
console.log(strStr(a, 'absa') === a.indexOf('absa'));