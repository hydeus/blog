/**
 * vue 初始化
 */
import Vue from './vue.js';

let vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello World',
    count: '100',
    testHtml: '<ul><li>这里是v-html渲染</li></ul>'
  },
  methods: {
    handClick() {
      console.log('1234');
    }
  }
})

console.log(vm);