// 给定一个字符串s，你可以从中删除一些字符，使得剩下的串是一个回文串。如何删除才能使得回文串最长呢？
// 输出需要删除的字符个数。


const str1 = 'abcda'

// delete 2 aba

function contruct_palindromes(str) {
  var deleted = 0;
  for (var i = 0, j = str.length - 1; ;) {
    for (; ;)  if (str_have_char(str, str[0], i + 1, j)) {
      i++;
      
    }
  }
}

function str_have_char(str, char, start, end) {
  var sub_str = str.substr(start, end)
  for (var i = 0; i < sub_str.length; i++) {
    if (sub_str[i] == char) return true;
  }
  return false;
}

function delete_char_from(str, idx) {
  return str.substr(0, idx) + str.substr(idx + 1);
}

function is_palindromes(str) {
  for (var i = 0, j = str.length - 1; i < j; i++ , j--) {
    if (str[i] != str[j]) return false;
  }
  return true;
}