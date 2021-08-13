#### 1. 块级元素水平居中的方法？ [16种方法实现水平居中垂直居中](https://louiszhai.github.io/2016/03/12/css-center/)

#### 2. 层叠上下文 [深入理解CSS中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

#### 3. [BFC(块级格式化上下文)](https://www.cnblogs.com/xiaohuochai/p/5248536.html)，[IFC](https://segmentfault.com/a/1190000017273573)
    1. BFC定义
        - BFC是一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之如此
    2. 如何创建BFC
        - float的值不是none
        - position的值不是static或者relative
        - display的值是inline-block、table-cell、flex、table-caption或者inline-flex
        - overflow的值不是visible
    3. BFC作用
        - 防止margin重叠
        - 自适应两列布局
        - 清除浮动

#### 4.清除浮动
    1. 方法一
```
    .clearfix:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size:0;
    }
    
    .clearfix { 
        *zoom: 1; //这是针对于IE6的，因为IE6不支持:after伪类，这个神奇的zoom:1让IE6的元素可以清除浮动来包裹内部元素。
    }
```
    2. 方法二
        利用BFC清除浮动

#### 5.超出部分加省略号
    1. 单行文本
```
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
```
    2. 多行文本（兼容性不好，移动端问题不大）
```
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; // 数字，显示几行文字才截取
```

#### 6. transition(过渡)，transform(变换)，animation(动画)
```
    transition: all 1s linear;
    transform: rotate(180deg);
```
```
    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .loading {
        animation: loading .5s linear infinite;
    }
```

#### 7. css实现三角形；箭头朝那边，那边的反方向设置颜色
```
    .arrow {
      width: 100px;
      height: 100px;
      position: relative;
      border: 1px solid #f0f;
    
      &:before {
        position: absolute;
        width: 0;
        height: 0;
        top: -20px;
        right: 0;
        content: '';
        border: 10px solid transparent;
        border-bottom-color: #f0f;
      }
    }
```
#### 8.flex [flex语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) [flex实战](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)








