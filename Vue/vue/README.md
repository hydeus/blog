  ## vue

  ### 原理

  采用数据劫持并结合发布/订阅模式，通过Object.defineProperty来劫持各个属性的setter,getter，在数据变动时发布消息给订阅者，出发响应的监听回调

  ### 核心实现类

  1. Observer 给对象的属性增加setter和getter方法，用于依赖收集和派发更新
  2. Dep 用于收集当前响应式对象的依赖关系，每个响应式对象（包括子对象）都拥有一个Dep实例（里面subs是Watcher实例数组），当数据有变更时，会通过dep.notify()通知各个watcher
  3. Watcher 观察者对象，实例分为渲染 watcher (render watcher),计算属性 watcher (computed watcher),侦听器 watcher（user watcher）三种
