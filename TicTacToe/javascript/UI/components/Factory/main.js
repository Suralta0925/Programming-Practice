"use strict";
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if ((i + j) === target) {
                return [i, j];
            }
        }
    }
    return [0, 0];
}
;
console.log(twoSum([2, 7, 11, 15], 9));
