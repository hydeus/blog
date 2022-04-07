/**
 * 返回满足两数之和等于target的对数
 * [5, 7, 9, 13, 11, 6, 6, 3, 3, 3], 12
 * [5, 7] [9, 3] [6, 6] ===> 3
 * @param {number[]} stocksProfit 
 * @param {number} target 
 * @returns number
 */

function stockPairs(stocksProfit, target) {
  var arr = [];
  for (var num of stocksProfit) {
    var diss = target - num;
    
  }
  console.log(arr);
  return arr.length;
}

console.log(stockPairs([5, 7, 9, 13, 11, 6, 6, 3, 3, 3], 12));