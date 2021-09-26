// 动态规划
// 特点：通过全局规划，将大问题分割成小问题来取最优解
// 动态规划解决方案从底部开始解决问题， 将所有小问题解决掉， 然后合并成一个整体解决方案， 从而解决掉整个大问题 


// 动态规划解决斐波那契问题
// 从第3项开始，每一项等于前两项之和

function dynamicFib(n) {
  var val = []
  for (var i = 0; i <= n; i++) {
    val[i] = 0
  }

  if (n === 1 || n === 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 2

    for (var i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2]
    }
  }

  return val[n - 1]
}

console.log(dynamicFib(10))

function iterFib(n) {
  var last = 1
  var nextLast = 1
  var result = 1

  for (var i = 2; i < n; i++) {
    result = last + nextLast
    nextLast = last
    last = result
  }

  return result
}

console.log(iterFib(10))