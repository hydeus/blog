/*
 * @Author: sumo 
 * @Date: 2022-03-07 11:22:49 
 * @Description: ts的静态类型 
 */

/**
 * 基础静态类型
 */

const uname: string = 'sumo';
const age: number = 0;


// interface Person {
//   name: string;
//   age: number;
//   sex?: string;
//   phone?: string;
// }

// const sumo: Person = {
//   name: 'sumo',
//   age: 30,
//   sex: 'male',
//   phone: '18612345678'
// }

// console.log(sumo);


/**
 * 对象类型
 * 1. 对象类型
 * 2. 数组类型
 * 3. 类类型
 * 4. 函数类型
 */

const brother: {
  name: string;
  age: number;
} = {
  name: 'sumo',
  age: 30
};
console.log(brother.age);

const shuzuleixing: string[] = ['1', '2', '3'];
console.log(shuzuleixing);

class Person {
  // public name: string;
  // public age: number;
  constructor(public name?: string, public age?: number) {
    this.name = name;
    this.age = age;
  }
}

const sumo: Person = new Person();
console.log(sumo);

const dajiao: () => string = () => {
  return ''
}