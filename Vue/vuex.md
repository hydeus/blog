# vuex

1. state存储状态
2. getters 对数据获取之前的再次编译，可以理解为state的计算属性
3. mutations 修改状态，同步执行 $store.commit('')
4. actions 异步操作 $store.dispatch('')
5. modules store的子模块，方便大型项目管理
    * namespaced: true ===> 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
