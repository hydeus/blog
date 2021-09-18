// promise promise.all promise.allSettled promise.race promise.spread

// 模拟promise.all
Promise.myAll = function(promises) {
  let result = [];
  let promiseCount = 0;
  let promisesLength = promises.length;

  return new Promise((resolve, reject) => {
    for (let promiseItem of promises) {
      Promise.resolve(promiseItem).then(res => {
        result.push(res);
        promiseCount++;
        if (promiseCount === promisesLength) {
          resolve(result);
        }
      }, err => {
        reject(err);
      })
    }
  })
}

var p1 = new Promise((resolve) => { setTimeout(() => { return resolve(3) }, 1000) });
var p2 = Promise.resolve(1);
var p3 = Promise.resolve(2);
var p = Promise.myAll([p1, p2, p3]);
p.then(res => console.log(res)).catch(err => console.log(err));

