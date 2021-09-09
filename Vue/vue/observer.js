/**
 * 给对象属性增加setter和getter方法，用于依赖收集和派发更新
 */

export default class Observer {
  constructor(data) {

  }

  // 递归遍历data中的所有数据
  traverse() {

  }

  init(obj) {
    Object.keys(obj).forEach(key => this.defineReactive(obj, key, obj[key]))
  }

  // 给传入的数据设置setter和getter
  defineReactive(obj, key, val) {
    // 递归遍历
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        console.log(val, 'get method');
        dep.depend()
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          dep.notify()
        }
      }
    })
  }
}