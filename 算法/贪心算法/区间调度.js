// 1. 有许多[start, end]的闭区间，请设计一个算法，算出该区间中，最多有几个互不相交的区间
//    比如intvs=[[1, 3], [2, 4], [3, 6]]
//    这些区间最多有两个区间互不相交，即[1, 3] [3, 6], intervalSchedule函数次数应该返回2

// 思路
// 1. 从可选区间intvs里，选择一个end最小的区间x
// 2. 把所有与x相交的区间从intvs里剔除
// 3. 重复1，2，直到把intvs给剔除空了

function intervalSchedule(intvs) {
  if (!intvs.length) return 0;

  // 进行闭区间升序
  const sortArray = intvs.sort((a, b) => a[1] - b[1]); // [1, 2] [2, 3]

  let count = 1; // 有几个区间互不相交
  let xEnd = sortArray[0][1];

  for (let item of intvs) {
    const start = item[0];
    if (start >= xEnd) {
      count++;
      xEnd = item[1];
    }
  }

  return count;
}

console.log(intervalSchedule([[1, 3], [2, 4], [3, 6]]));


// 2. 无重叠区间
// 先找出不相交的区间的个数，再用总数减去不相交的个数，剩下的就是重叠的个数
// https://leetcode-cn.com/problems/non-overlapping-intervals/
function eraseOverlapIntervals(intvs) {
  let len = intvs.length;
  if (!len) return 0;

  // 进行闭区间升序
  const sortArray = intvs.sort((a, b) => a[1] - b[1]); // [1, 2] [2, 3]

  let count = 1; // 有几个区间互不相交
  let xEnd = sortArray[0][1];

  for (let item of intvs) {
    const start = item[0];
    if (start >= xEnd) {
      count++;
      xEnd = item[1];
    }
  }

  return len - count;
}


// 3. 用最少的箭头射爆气球
// https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/


