/**
 * 柯里化
 */

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  const _args = [...arguments]

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  function fn() {
    _args.push(...arguments)
    return fn
  }

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  fn.toString = function() {
    return _args.reduce((sum, current) => sum + current)
  }

  return fn
}

console.log(add(1)(2)(3)(4)); // 10
console.log(add(1)(1, 2, 3)(2)); // 9