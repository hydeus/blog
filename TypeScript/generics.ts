/**
 * 泛型
 * 
 * 静态检查，多人协作
 * 
 */



// 简单输出
function identity<T>(arg: T): T {
  return arg;
}

let test1 = identity<string>('12345');
let test2 = identity(67890);
console.log(test1);
console.log(test2);

// 使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg
}

function loggingIdentity1<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg
}

let test3 = loggingIdentity([111,222]);
let test4 = loggingIdentity1(['333']);
console.log(test3);
console.log(test4);

