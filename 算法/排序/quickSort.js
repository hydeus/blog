/**
 * 快速排序
 * 
 * 先选择一个数当基数，一般选择最后一个数
 * 然后遍历arr， 找出这个基点数的比它大的数组集合和比它小的数组集合
 * 递归此步骤
 */

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]

function quickSort(arr) {
  if (arr.length < 2) return arr

  var left = []
  var right = []
  var cur = arr[arr.length - 1]

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= cur) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return [...quickSort(left), cur, ...quickSort(right)]

}

console.log(quickSort(arr))