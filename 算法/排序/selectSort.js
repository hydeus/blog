/**
 * 选择排序
 * 
 * 原理：在未排序序列中找出最小（大）值，存放到排序序列的起始位置，再从未剩余未排序的元素中继续寻找最小（大）值，放到已排序的末尾
 */

function selectSort(data) {
  var len = data.length
  var minIndex
  var temp

  for (var i = 0; i < len - 1; i++) { // 最后一个不用比较了，已经是最大或最小了
    minIndex = i

    for (var j = i + 1; j < len; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j
      }
    }

    temp = data[i]
    data[i] = data[minIndex]
    data[minIndex] = temp
  }

  return data
}



var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(selectSort(arr))

