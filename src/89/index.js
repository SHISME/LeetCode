/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const result = [];
  for (let i = 0; i < 1 << n; i++) {
      result.push(i>>1^i);
  }
  return result;
};

console.log(grayCode(2));

module.exports = {
    title:'Gray Code',
    url:'https://leetcode.com/problems/gray-code/',
    id:'89',
    difficulty:'medium',
    have_md:true,
};