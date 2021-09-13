/**
 * 包括vue的构造函数，接收各种配置参数
 */

import Observer from './observer.js';
import Compiler from './compiler.js';

export default class Vue {
  constructor(options = {}) {
    // 加$是让属性成为函数的内部私有属性，很多框架都是这样做的，也可以使用其他的符号
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    this.$el = document.querySelector(options.el);
    
    // 将data中的数据注入到vue实例中
    this._proxyData(this.$data);
    
    // 实例化observer对象，监听数据变化
    new Observer(this.$data);
    
    // 模板解析
    new Compiler(this);
  }

  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newVal) {
          if (newVal === data[key]) {
            return;
          }
          data[key] = newVal;
        }
      })
    })
  }
}