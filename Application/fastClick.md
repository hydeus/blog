# fastClick 原理

* 在检测到touchEnd事件的时候，会通过DOM自定义事件立即发出模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。