"use strict"

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    var result = [];
    nums.forEach((v, i) => {
        var r = nums.slice(i + 1)
        result.push(listSmaller(r, v))
    })
    return result;
};


var listSmaller = (list, num) => {
    var result = 0;
    list.forEach(v => { if (v < num) result++ })
    return result;
}

console.log(countSmaller([5, 2, 6, 1]))