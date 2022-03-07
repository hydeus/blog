/*
 * @Author: sumo 
 * @Date: 2022-03-07 12:21:00 
 * @Description: class 
 */

// 类的重写

class Lady {
  content = 'Hi, 帅哥';
  sayHello() {
    return this.content;
  }
}

class Sumo extends Lady {
  sayLove() {
    return 'I love you';
  }
  sayHello() {
    return 'I love you too';
  }
}

const sumo = new Sumo();
console.log(sumo.sayHello());
console.log(sumo.sayLove());
