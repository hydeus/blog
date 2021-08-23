### vue经典面试题

#### 一、vue响应式原理

* vue三个核心类

1. Observer: 给对象的属性添加getter和setter，用于**依赖收集**和**派发更新**
2. Dep: 用于收集当前响应式对象的依赖关系，每个响应式对象都有一个dep实例。dep.subs = watcher[] 当数据发生变更的时候，会通过dep.notify()通知个watcher
3. Watcher: 观察者对象，render watcher、computed watcher、user watcher

* 依赖收集
1. initState, 对computed属性初始化时，会触发computed watcher 依赖收集
2. initState, 对监听属性初始化的时， 会触发user watcher 依赖收集
3. render, 触发render watcher 依赖收集

* 派发更新

Object.defineProperty

1. 组件中对响应的数据进行了修改，会触发setter逻辑
2. dep.notify()
3. 遍历所有subs，调用每一个watcher的 update 方法

原理总结：

当创建vue实例时，vue会遍历data里的属性，Object.defineProperty 为属性添加getter和setter对数据的读取进行劫持。


#### 二、计算属性的实现原理

1. computed所谓的缓存是指什么
计算属性是基于他的响应式依赖进行缓存的，只有依赖发生改变的时候才会重新求值


2. computed缓存存在的意义是什么？或经常在什么时候使用？


3. 没有经过data声明的属性都**不会**被computed监听到，因为没有经过vue初始化，没有被Observer监听。


#### 三、Vue.nextTick原理

```js
Vue.nextTick(() => {
  // todo
})

await Vue.nextTick()
// todo
```

Vue 是异步执行dom更新的，一旦观察到数据的变化，把同一个event loop中观察数据变化的watcher推送进这个队列。
在下一次事件循环时，Vue清空异步队列，进行dom的更新

Promise.then -> MutationObserver -> setImmediate -> setTimeout

vm.someData = 'new value', dom并不会马上更新，而是在异步队列被清除时才会更新dom。

宏任务 -> 微任务对列 -> UI render 

一般什么时候用到nextTick呢？
在数据变化后要执行某个操作，而这个操作依赖因你数据改变而改变的dom，这个操作就应该被放到vue.nextTick回调中

```js
<template>
  <div v-if="loading" ref="loading"></div>
</template>

<script>
  async lodeData() {
    this.loading = true
    this.$refs.text.xxx() // 这里是获取不到loading的，所以需要在nextTick后使用
    await Vue.nextTick()
    this.$refs.loading.xxx()
  }
</script>
```

#### 四、手写一个vue























