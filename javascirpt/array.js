// 需要注意的是要在非strict模式下运行 否则会提示中间变量未定义

var fibonacci = x => x > 2 ? (t = fibonacci(x - 1)) && t.concat(t[t.length - 1] + t[t.length - 2]) : [1, 1]
var trian_num = n => n > 1 ? (t = trian_num(n - 1)) && t.concat(t[t.length - 1] + n) : [1]

console.log(`fibonacci 10 :\n${fibonacci(10)}`);
console.log(`trian 10:\n${trian_num(10)}`);