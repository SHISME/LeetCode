/*
 * @lc app=leetcode id=838 lang=javascript
 *
 * [838] Push Dominoes
 *
 * https://leetcode.com/problems/push-dominoes/description/
 *
 * algorithms
 * Medium (42.60%)
 * Total Accepted:    10.4K
 * Total Submissions: 24.2K
 * Testcase Example:  '".L.R...LR..L.."'
 *
 * There are N dominoes in a line, and we place each domino vertically
 * upright.
 * 
 * In the beginning, we simultaneously push some of the dominoes either to the
 * left or to the right.
 * 
 * 
 * 
 * After each second, each domino that is falling to the left pushes the
 * adjacent domino on the left.
 * 
 * Similarly, the dominoes falling to the right push their adjacent dominoes
 * standing on the right.
 * 
 * When a vertical domino has dominoes falling on it from both sides, it stays
 * still due to the balance of the forces.
 * 
 * For the purposes of this question, we will consider that a falling domino
 * expends no additional force to a falling or already fallen domino.
 * 
 * Given a string "S" representing the initial state. S[i] = 'L', if the i-th
 * domino has been pushed to the left; S[i] = 'R', if the i-th domino has been
 * pushed to the right; S[i] = '.', if the i-th domino has not been pushed.
 * 
 * Return a string representing the final state. 
 * 
 * Example 1:
 * 
 * 
 * Input: ".L.R...LR..L.."
 * Output: "LL.RR.LLRRLL.."
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "RR.L"
 * Output: "RR.L"
 * Explanation: The first domino expends no additional force on the second
 * domino.
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= N <= 10^5
 * String dominoes contains only 'L', 'R' and '.'
 * 
 * 
 */
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let res = dominoes.split('');
    let index = 0;
    while (index < dominoes.length) {
        if (dominoes[index] !== '.') {
            index++;
            continue;
        }
        const leftIndex = foundLeft(index);
        const rightIndex = foundRight(index);
        const leftDirection = dominoes[leftIndex];
        const rightDirection = dominoes[rightIndex];
        if (
            leftDirection === 'R' &&
            rightDirection === 'L'
        ) {
            let left = leftIndex + 1;
            let right = rightIndex - 1;
            while (left < right) {
                res[left] = 'R';
                res[right] = 'L';
                left++;
                right--;
            }
        } else if (leftDirection === 'R') {
            let left = leftIndex + 1;
            while (left < rightIndex) {
                res[left] = 'R';
                left++;
            }
        } else if (rightDirection === 'L') {
            let right = rightIndex - 1;
            while (right > leftIndex) {
                res[right] = 'L';
                right--;
            }
        }
        index = rightIndex + 1;
    }
    return res.join('');

    function foundLeft(i) {
        let index = i - 1;
        while (index >= 0) {
            if (dominoes[index] === '.') {
                index--;
            } else {
                return index;
            }
        }
        return index;
    }
    function foundRight(i) {
        let index = i + 1;
        while (index < dominoes.length) {
            if (dominoes[index] === '.') {
                index++;
            } else {
                return index;
            }
        }
        return index;
    }
};

module.exports = {
    id:'838',
    title:'Push Dominoes',
    url:'https://leetcode.com/problems/push-dominoes/description/',
    difficulty:'Medium',
}