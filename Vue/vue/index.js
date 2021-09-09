/**
 * vue 初始化
 */
import Vue from './vue.js';

let vm = new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 2,
    c: 3
  },
  methods: {
    handClick() {
      console.log('1234');
    }
  }
})

console.log(vm)