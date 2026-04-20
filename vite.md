## vite基础

```
<scirpt src='./src/main.js'  type='module'></script>
```

- 理念：现在的浏览器都是原生支持esm,需要加上type='module' 才可以正常加载

- 但是已经可以加载js了，为啥还需要vite呢？

- 因为有ts,vue，这些是浏览器无法识别的

- 还有node_modules,cjs模块需要转成esm

- 除此之外，比如加载lodash的话，需要去加载200个文件

  

## vite怎么解决的

- vite可以加载lodash的时候，打包成一个文件去加载

  

## vite为什么好用

因为不用手动配置plugin,比如处理less,postcss的时候，只需要安装对应的依赖即可，默认也可以处理css,ts,图片

### 知识点

- vite会直接请求ts文件，less文件，然后转发成编译好的js

## vite为什么快

- 会进行预打包，放在.vite里面

- esbuild  {

  超快，支持es6和cjs,支持treeshaking,

  支持ts,jsx

  代码压缩等等

  }

  ### esbuild为什么快？

  用go编写，直接转成机器码

  esbuild可以充分利用cpu多内核

  



