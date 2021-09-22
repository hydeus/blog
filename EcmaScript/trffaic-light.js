// 红绿灯

function lightControl({ timer = 3000, callback }) {
  return new Promise(resolve => {
    setTimeout(() => {
      callback();
      resolve()
    }, timer)
  })
}

function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

// async/await
async function run() {
  await lightControl({ timer: 1000, callback: red });
  await lightControl({ timer: 2000, callback: green });
  await lightControl({ timer: 3000, callback: yellow });
  run();
}
run();

// promise 链式调用
let myStep = () => {
  Promise.resolve().then(() => {
    return lightControl(3000, red);
  }).then(() => {
    return lightControl(2000, green);
  }).then(() => {
    return lightControl(1000, yellow);
  }).then(() => {
    myStep();
  })
};
myStep();

