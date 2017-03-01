// 小Q今天在上厕所时想到了这个问题：有n个数，两两组成二元组，差最小的有多少对呢？差最大呢？

var num_num = 6;
var arr = [45, 12, 45, 32, 5, 6];


function gen_tuples(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]])
    }
  }
  return result;
}

function get_sub(tuples) {
  var result = [];
  for (var i = 0; i < tuples.length; i++) {
    result.push(Math.abs(tuples[i][0] - tuples[i][1]))
  }
  return result;
}

function find_sub_num(arr) {
  var min = Number.MAX_VALUE;
  var min_num = 0;
  var max = -1;
  var max_num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      min_num = 1;
    }
    else if (arr[i] == min) {
      min_num++
    }
    if (arr[i] > max) {
      max = arr[i];
      max_num = 1;
    }
    else if (arr[i] == max) {
      max_num++
    }
  }
  return [min_num, max_num];
}

console.log(get_sub(gen_tuples(arr)))
console.log(find_sub_num(get_sub(gen_tuples(arr))))