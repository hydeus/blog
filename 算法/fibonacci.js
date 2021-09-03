/**
 * 斐波那契(fěi bō nà qì)
 * 又称：黄金分割数列
 * 
 * 从第3项开始，每一项等于前两项之和
 */

function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5));




