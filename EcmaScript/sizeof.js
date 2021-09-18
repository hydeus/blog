/**
 * 简单实现对象内存计算
 * 
 * number ===> 8个字节
 * boolean ===> 4个字节
 * string ===> 单位长度2个字节
 */

// type
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const mapTag = '[object Map]';
const setTag = '[object Set]';
const functionTag = '[object Function]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';

function type_of(target) {
  return Object.prototype.toString.call(target);
}

function calcSizeof(target) {
  let size = 0;

  switch (type_of(target)) {
    case stringTag:
      size = target.length * 2;
      break;
    case numberTag:
      size = 8;
      break;
    case boolTag:
      size = 4;
      break;
    case symbolTag:
      size = 0;
      break;
    default:
      size = 0;
  }

  return size;
}

function sizeof(obj) {
  var bytes = 0;
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    bytes = bytes + calcSizeof(key) + calcSizeof(value);
  });
  return bytes;
}


let testObj = {
  a: 1, // 2 + 8
  kv: 'haha', // 4 + 8
  123: true, // 6 + 4
}

console.log(sizeof(testObj));
