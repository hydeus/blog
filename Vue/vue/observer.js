/**
 * 给对象属性增加setter和getter方法，用于依赖收集和派发更新
 */

import Dep from './dep.js';

export default class Observer {
  constructor(data) {
    this.traverse(data);
  }

  // 递归遍历data中的所有数据
  traverse(data) {
    if (!data || typeof data !== 'object') {
      return;
    }

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    })
  }

  // 给传入的数据设置setter和getter
  defineReactive(obj, key, val) {
    this.traverse(val);
    const that = this;

    let dep = new Dep();
    
    // 递归遍历
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        Dep.target && dep.addSub(Dep.target); // 收集依赖
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        that.traverse(newVal); // 设置的时候可能设置了一个对象
        dep.notify(); // 通知更新操作
      }
    })
  }
}