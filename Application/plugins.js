/**
 * 框架兼容不同模式写法
 */

 (function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : // cmd
	typeof define === 'function' && define.amd ? define(factory) : (global.Vue = factory()); // amd window 
})(window, function() {
  console.log('======================start code=====================');
});