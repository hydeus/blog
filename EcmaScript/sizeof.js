/**
 * 计算对象所占内存大小
 */


function sizeof(obj) {
  var bytes = 0;
  Object.keys(obj).forEach(key => {
    bytes += key.length
    if (typeof obj[key] === 'boolean') {
      bytes += 4
    }
    if (typeof obj[key] === 'number') {
      bytes += 8
    }
    if (typeof obj[key] === 'object') {
      console.log('todo...');
    }
  })

  return bytes;
}


var obj = {
  a: 199999,
  b: true,
  c: '100'
}


console.log(sizeof(obj));