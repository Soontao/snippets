
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  var tokens = line.split(' ');
  console.log(shift_upper(tokens[0]));
});

function shift_upper(str) {
  var upper_str = '';
  var lower_str = '';
  for (var i = 0; i < str.length; i++) {
    if (is_upper(str[i])) upper_str += str[i];
    else lower_str += str[i];
  }
  return lower_str + upper_str;
}

function is_upper(char) {
  if (char < 'a')
    return true;
  else
    return false;
}
