// 二分查找法
// 只适用于从有序的序列中进行查找（比如数字、字母），将队列排序后再进行查找
// 思路： 
//      1. 将数组折半，分成左右两个数组
//      2. 判断要查找的数和中间数的值大小，来判断要查找的数实际在那一边
//      3. 之后继续折半查找，直至找到这个数为止

/**
 * 查找目标数是否在已知数组里面
 * @param {*} nums 
 * @param {*} target 
 * @returns {Boolean}
 */
function search(nums, target) {
  var low = 0;
  var high = nums.length - 1

  while (low <= high) {
    var mid = Math.floor((low + high) / 2)
    if (target === nums[mid]) {
      return true
    } else if (target > nums[mid]) {
      low = mid + 1
    } else if (target < nums[mid]) {
      high = mid - 1
    }
  }

  return false
}

var nums = [0, 1, 2, 3, 5]
var target = 4

console.log(search(nums, target))