/**
 * 装饰器
 * 优先级：属性>方法>类
 * 结果：类似洋葱或栈，先执行的后返回结果，先进后出
 */

// 定义装饰器工厂
function logClass1(params: string) {
  console.log(params);
  return function(target: any) {
    console.log('类装饰器1');
  }
}

function logClass2(params: string) {
  console.log(params);
  return function(target: any) {
    console.log('类装饰器2');
  }
}


// 属性装饰器
function logProperty(params ? : any) {
  console.log(params);
  return function(target: any, attr: any) {
    console.log('属性装饰器');
  }
}


// 方法装饰器
function logmethod(params: any) {
  console.log(params);
  return function(target: any, methodName: any, desc: any) {
    console.log('方法装饰器');
  }
}


// 方法参数装饰器
function logmethod1(params: any) {
  console.log(params);
  return function(target: any, paramsName: any, paamsIndex: any) {
    console.log('方法参数装饰器1');
  }
}

function logmethod2(params: any) {
  console.log(params);
  return function(target: any, paramsName: any, paamsIndex: any) {
    console.log('方法参数装饰器2');
  }
}


@logClass1("类参数1")
@logClass2("类参数2")
class HttpClient {
  @logProperty() // 可以不传参
  public apiUrl: string | undefined;
  constructor() {}
  @logmethod('方法参数')
  @logmethod1('方法参数1')
  @logmethod2('方法参数2')
  getData() {
    console.log(this.apiUrl);
  }
  setData() {
    console.log(this.apiUrl);
  }
}


var http: any = new HttpClient();
http.getData();


