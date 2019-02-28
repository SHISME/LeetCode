/*
 * @lc app=leetcode id=726 lang=javascript
 *
 * [726] Number of Atoms
 *
 * https://leetcode.com/problems/number-of-atoms/description/
 *
 * algorithms
 * Hard (43.96%)
 * Total Accepted:    9.3K
 * Total Submissions: 21K
 * Testcase Example:  '"H2O"'
 *
 * Given a chemical formula (given as a string), return the count of each
 * atom.
 * 
 * An atomic element always starts with an uppercase character, then zero or
 * more lowercase letters, representing the name.
 * 
 * 1 or more digits representing the count of that element may follow if the
 * count is greater than 1.  If the count is 1, no digits will follow.  For
 * example, H2O and H2O2 are possible, but H1O2 is impossible.
 * 
 * Two formulas concatenated together produce another formula.  For example,
 * H2O2He3Mg4 is also a formula.  
 * 
 * A formula placed in parentheses, and a count (optionally added) is also a
 * formula.  For example, (H2O2) and (H2O2)3 are formulas.
 * 
 * Given a formula, output the count of all elements as a string in the
 * following form: the first name (in sorted order), followed by its count (if
 * that count is more than 1), followed by the second name (in sorted order),
 * followed by its count (if that count is more than 1), and so on.
 * 
 * Example 1:
 * 
 * Input: 
 * formula = "H2O"
 * Output: "H2O"
 * Explanation: 
 * The count of elements are {'H': 2, 'O': 1}.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 
 * formula = "Mg(OH)2"
 * Output: "H2MgO2"
 * Explanation: 
 * The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: 
 * formula = "K4(ON(SO3)2)2"
 * Output: "K4N2O14S4"
 * Explanation: 
 * The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
 * 
 * 
 * 
 * Note:
 * All atom names consist of lowercase letters, except for the first character
 * which is uppercase.
 * The length of formula will be in the range [1, 1000].
 * formula will only consist of letters, digits, and round parentheses, and is
 * a valid formula as defined in the problem.
 * 
 */
/**
 * 思路：
 * 
 * 1.找到每一个括号里的子字符串的结果，递归的去找结果
 * 2.遇到括号就先找过好里的结果，再讲括号内的结果与外面的数字结合
 * 3.合并结果集
 * 
 * 
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    const atomMap = getAtomsMap(formula);
    const keys = Object.keys(atomMap);
    keys.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] === b[0]) {
            if (a[1] && !b[1]) {
                return 1;
            }
            if (!a[1] && b[1]) {
                return -1;
            }
            if (a[1] > b[1]) {
                return 1;
            }
        }
        return -1;
    });
    return keys.reduce((res, cur) => res + cur + (atomMap[cur] > 1 ? atomMap[cur] : ''), '');
    function getAtomsMap(formula) {
        let lastAtom = '';
        let result = {};
        const parenthesesStack = [];
        for (let i = 0; i < formula.length; i++) {
            const curAtom = formula[i];
            if (curAtom === '(') {
                setResult(result, lastAtom, 1);
                lastAtom = '';
                let subFormula = '';
                parenthesesStack.push(i);
                i++;
                while (parenthesesStack.length > 0) {
                    const curAtom = formula[i];
                    if (curAtom === '(') {
                        parenthesesStack.push(i);
                    }
                    if (curAtom === ')') {
                        parenthesesStack.pop();
                    }
                    subFormula += curAtom;
                    i++;
                }
                let num = formula[i];
                i++;
                while (/\d/.test(formula[i])) {
                    num += formula[i];
                    i++;
                }
                i--;
                num = parseInt(num);
                subFormula = subFormula.substring(0, subFormula.length - 1);
                const subAtomsMap = getAtomsMap(subFormula);
                Object.keys(subAtomsMap).forEach((atom) => {
                    setResult(result, atom, subAtomsMap[atom] * num);
                });
                continue;
            }
            if (/[a-z]/.test(curAtom)) {
                lastAtom += curAtom;
                continue;
            }
            if (/[A-Z]/.test(curAtom)) {
                setResult(result, lastAtom, 1);
                lastAtom = curAtom;
                continue;
            }
            let num = curAtom;
            i++;
            while (/\d/.test(formula[i])) {
                num += formula[i];
                i++;
            }
            i--;
            setResult(result, lastAtom, parseInt(num));
            lastAtom = '';
        }
        setResult(result, lastAtom, 1);
        return result;
    }
    function setResult(map, key, count) {
        if (key) {
            if (map[key]) {
                map[key] += count;
            } else {
                map[key] = count;
            }
        }
    }
};
// console.log(countOfAtoms('H2O'))
// console.log(countOfAtoms('K4(ON(SO3)2)2'));
console.log(countOfAtoms('Mg(OH)2'));
// console.log(countOfAtoms('((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14'));

module.exports = {
    id:'726',
    title:'Number of Atoms',
    url:'https://leetcode.com/problems/number-of-atoms/description/',
    difficulty:'Hard',
}