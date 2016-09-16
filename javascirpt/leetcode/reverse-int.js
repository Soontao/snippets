
/**
 * 逆序一个整型
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var num = Math.abs(x) == x ? x.toString() : x.toString().slice(1)
    var symbol = Math.abs(x) == x ? '' : x.toString()[0]
    var result = symbol + num.split('').reverse().toString().replace(/,/g, '')
    result = parseInt(result)
    return Math.abs(result) > Math.pow(2, 31) ? 0 : result
};

console.log(reverse(-321))
console.log(reverse(13213))
console.log(reverse(1534236469))