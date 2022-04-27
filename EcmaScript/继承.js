/**
 * JS继承
 * 
 * https://zhuanlan.zhihu.com/p/72914477
 * https://www.jianshu.com/p/90f95be9236a
 * 1. 原型链继承：将子类的原型链指向父类的对象实例
 * 2. 构造函数继承：call aplly bind
 * 3. 组合继承（原型链继承和构造函数继承的组合）
 * 4. 原型式继续
 * 5. 寄生式继承
 * 6. es6 extends
 * 
 */

function Person(name) {
  this.name = name;
}

Person.prototype.job = 'FED';
Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}`);
}

var person = new Person('sumo');
person.sayHello();


function Child() {
  this.name = 'child';
}

Child.prototype = new Person(); // 非常重要的一句

var child = new Child();
console.log(child.name);
child.sayHello();
console.log(child instanceof Person);

// es6 extends

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, food) {
    super(name);
    this.food = food;
  }

  eat() {
    console.log(`eat, ${this.food}`);
  }
}

var dog = new Dog('哈士奇', '狗粮');
dog.sayHello();
dog.eat();
