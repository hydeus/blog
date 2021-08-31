/**
 * 希尔排序（缩小增量排序）
 * 是插入排序的一种更高效的改进版本，但希尔排序是非常稳定的排序算算法
 * 
 * 思想
 * 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，
 * 待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。
 */


function shellSort(arr) {
  // 用于存储需要插入的数据
  var temp
  // 定义步长，2代表把数组分为两个子序列（数组）
  var gap = Math.floor(arr.length / 2)
  
  while (gap >= 1) {
    for (var i = gap, len = arr.length; i < len; i++) {
      // 将第i个数据保存，以供之后插入的合适的位置使用
      temp = arr[i]
      // 因为前i-1个数都是从小到大的有序序列，只要当前比较的数arr[j-1]比temp大，就把这个数后移一位
      for (var j = i - gap; j >= 0 && arr[j] > temp; j = j - gap) {
        arr[j + gap] = arr[j]
      }
      // 将temp插入合适的位置
      arr[j + gap] = temp
    }
    
    gap = Math.floor(gap / 2)
  }
  
  
  return arr
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(shellSort(arr))

