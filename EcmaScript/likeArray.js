// https://blog.csdn.net/MFWSCQ/article/details/105148418

/**
 * 类数组判断
 * 1. 存在且是对象
 * 2. 对象上的splice属性是函数类型
 * 3. 对象上的length属性且为正整数
 * 
 * @param {Object} obj 
 * @returns {Boolean}
 */
function isArrayLike(obj) {
  if (!obj || typeof obj !== 'object')
    return false;
  try {
    if (typeof obj.splice === 'function') {
      const len = obj.length;
      return typeof len === 'number' && (len >>> 0 === len && (len > 0 || 1 / len > 0));
    }
  } catch (e) {}
  return false;
}

var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}

console.log(isArrayLike(obj));

obj.push(1);
obj.push(2);
console.log(obj);