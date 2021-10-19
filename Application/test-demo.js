// 使用setTimeout模拟setInterval

function clg() {
  console.log('12345');
}

// var timer = null;

// function _setInterval(callback, time) {
//   function fn() {
//     callback();
//     timer = setTimeout(fn, time);
//   }

//   fn();
// }

// var timer = _setInterval(clg, 1000);

// function _clearSetInterval(timer) {
//   clearTimeout(timer);
// }

// setTimeout(() => {
//   _clearSetInterval(timer);
// }, 5000);


// debounce

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     timer && clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, delay);
//   }
// }

// const debounceOninput = debounce(clg, 1000);

// setInterval(() => {
//   debounceOninput();
// }, 1001);


// throttle
// 首节流，采用时间戳
function throttle(fn, delay) {
  let previous = 0;
  return function() {
    let now = +new Date();
    if (now - previous > delay) {
      fn.apply(this, arguments);
      previous = now;
    }
  }
}

// 尾节流，采用定时器

// 首节流+尾节流，采用时间戳+定时器


// 深拷贝

function isObject(target) {
  var type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

// 简易版的deepClone
function deepClone(source) {
  if (!isObject(source)) return source;

  var target = Array.isArray(source) ? [] : {};
  for(var key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
}

// 复杂版的深拷贝
// map set function
