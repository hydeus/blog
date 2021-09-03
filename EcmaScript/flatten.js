/**
 * 数组扁平化
 */

var arr = [[2, [5, 6]], 1, 5]


// 1. es6 flat
console.log(arr.flat(2))


// 2. reduce concat 递归
function flatten2(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten2(item) : item)
  }, [])
}
console.log(flatten2(arr))

// 3. toString split
function flatten3(arr) {
  return arr.toString().split(',').map(item => Number(item))
}
console.log(flatten3(arr))

// 4. join split
function flatten4(arr) {
  return arr.join(',').split(',').map(item => Number(item))
}
console.log(flatten4(arr))

// 5. 扩展运算符
// es6的扩展运算符能将二维数组转换为一维数组

console.log([].concat(...[1, 2, 3, [4, 5]]))  // [1, 2, 3, 4, 5]
// 根据这个结果可以做一个遍历 
// 若arr中有数组则使用一次扩展运算符，直至没有为止

function flatten5(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}
console.log(flatten5(arr))


