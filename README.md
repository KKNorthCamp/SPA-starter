# invite-operation-managment-system

这个项目是使用 [yo angular generator](https://github.com/yeoman/generator-angular) 生成的.
yeoman 版本 0.15.1.

## 初始化

```
npm install & bower install
```

成功完成且没有报错信息即可认为初始化成功. 

## 开发和预览

```
grunt serve
```

## 发布

```
grunt
```

注意: 如果命令行打印的都是一些不严重的报错信息, 而且测试页面功能没问题的话, 可以用 `grunt --force` 忽略错误强制 build.

build 出来的项目, 默认会输出到 `dist` 目录下. (输出目录可以在 `Gruntfile.js` 文件中定制)

## 测试

```
grunt test
```

用 karma 进行单元测试.

## 附记

- 关于 generator-angular 生成器
 
 yeoman 的 generator-angular 提供了一个 **"可以通过命令行脚本自动生成 & 创建 & 引用 angular 的 route, directive, service, view 等模块"** 的福利.
 
 例如:
 
 ```
 yo angular:route myroute
 yo angular:service util
 ```
 
 以下是 generator-angular 所有可用的生成器:
 
     * angular (aka angular:app)
     * angular:controller
     * angular:directive
     * angular:filter
     * angular:route
     * angular:service
     * angular:provider
     * angular:factory
     * angular:value
     * angular:constant
     * angular:decorator
     * angular:view

关于 yeoman 的 generator-angular 的详细文档, 请参考这里: https://www.npmjs.com/package/generator-angular#generators

- 关于 yeoman 脚手架命令 `yo angular:route xxx` 中 "xxx" 的推荐命名规则

当你对一个通过 `yo angular:route` 创建的路由命名时, 推荐使用 `-` 间隔这些单词, generator-angular 这个生成器似乎对 `-` 的命名方式做过处理, 通过这种方式创建出来的*文件*(template, controller 和 test文件)与*变量*(controller, controllerAs 和 test 等)名称会自动转换成驼峰和首字母全大写的写法, 但是当你用驼峰之类的其他命名方式时, 整个名称会被当做一整个单词, 相比后者会有更好的可读性.

例如:
 
 ```
 yo angular:route halo-yeoman
 ```