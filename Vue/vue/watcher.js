/**
 * 观察者对象
 * 分为：渲染（render watcher）、计算（computed watcher）、侦听器（user watcher）
 */

import Dep from "./dep.js"

export default class Watcher {
  /**
   * 
   * @param {*} vm vue实例
   * @param {*} key data中的属性名
   * @param {*} cb 更新视图的回调函数
   */
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    // todo...
    // 同一
    Dep.target = this

    // 触发get方法，在get方法里会去做一些操作
    // 初始化的时候就是旧值
    this.oldValue = vm[key]

    Dep.target = null
  }

  // 数据变化的时候更新视图
  update() {
    // 更新过后就是新值
    let newValue = this.vm[this.key]
    // 兜底
    if(this.oldValue === newValue) {
      return
    }
    this.cb(newValue)
  }
}

// watcher初始化获取oldValue的时候，触发get方法，在get方法里会做那些操作？
// 通过vm[key]获取oldValue前，为什么要将当前的实例挂载在Dep上，获取之后为什么又置为null？
// update方法是在什么时候执行的？
