/**
 * 实现一个once函数，传入函数参数只执行一次
 */

function once(fn) {
  let flag = true;
  return function() {
    if (tag) {
      fn.apply(null, arguments);
      flag = false;
    }
    return undefined;
  }
}

function testOnce(args) {
  console.log(args);
}

once(testOnce('1234567890'));

