/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return nums.reduce((result, current_value, index) => {
        if (nums[index - 1] !== current_value) {
            result.push(current_value);
            nums[result.length - 1] = current_value;
        }
        return result;
    }, []).length;
};

console.log(removeDuplicates([1,1,2]))