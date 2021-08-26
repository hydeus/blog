/**
 * 冒泡排序
 */


var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log(Math.max.apply(this, arr));
console.log(Math.min.apply(this, arr));


function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}
console.log(bubbleSort(arr))