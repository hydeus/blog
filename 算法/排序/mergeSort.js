/**
 * 归并排序
 */


/**
 * 二路归并排序
 * 
 * 把长度为n的输入序列分成两个长度为n/2的子序列
 * 对这两个子序列分别采用归并排序
 * 将两个排序好的子序列合并成一个最终的排序序列
 * 
 * @param {Array} data 
 * @returns Array
 */
function twoMergeSort(data) {
  var len = data.length
  if (len < 2) return data

  var middle = Math.floor(len / 2)
  var left = data.slice(0, middle)
  var right = data.slice(middle, len)

  return merge(twoMergeSort(left), twoMergeSort(right))
}

/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 * @returns Array
 */
function merge(left, right) {
  var result = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(twoMergeSort(arr))

// 多路归并排序


