/**
 * 计数排序
 * 
 * 计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
 * 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须试试有确定范围的整数
 */

function countSort(data, maxValue) {
  var bucket = new Array(maxValue + 1)
  var sortIndex = 0
  var len = data.length
  var bucketLen = maxValue + 1

  for (var i = 0; i < len; i++) {
    if (!bucket[data[i]]) {
      bucket[data[i]] = 0
    }

    bucket[data[i]]++
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      data[sortIndex++] = j
      bucket[j]--
    }
  }
  return data
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(countSort(arr, 78))

