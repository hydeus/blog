/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  // 1.双栈
  var numStack = []; // 存放数字
  var strStack = []; // 存放字符
  var num = 0; // 初始重复次数
  var result = ''; // 存放编译后的字符串

  for(var char of s) {
    if(!isNaN(char)) { // 数字
      num = num * 10 + Number(char);
    } else if(char == '[') { // 左中括号
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if(char == ']') { // 右中括号
      var repeatTimes = numStack.pop(); // 重复次数
      result = strStack.pop() + result.repeat(repeatTimes);
    } else { // 字符
      result += char; // 字母做累加
    }
  }

  return result;
};

console.log(decodeString("3[a]2[bc]"));
console.log('aaabcbc');