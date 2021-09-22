// 使用setTimeout实现setInterval
// 递归实现

let timerId = null;
function mockSetinterval(fn, delay, ...args) {
  let recur = function() {
    timerId = setTimeout(() => {
      fn.apply(this, args);
      recur();
    }, delay);
  }

  recur();
}

function clearMockSetinterval(id) {
  clearTimeout(id);
}

mockSetinterval(name => {
  console.log(name);
}, 1000, 'sumo');

setTimeout(() => {
  clearMockSetinterval(timerId);
}, 5000);




