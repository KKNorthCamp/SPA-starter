# invite-operation-managment-system

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## 关于 yeoman 脚手架命令 `yo angular:route xxx` 的命名推荐写法
当你对一个通过 `yo angular:route` 创建的路由命名时, 推荐使用 `-` 间隔这些单词, generator-angular 这个生成器似乎对 `-` 的命名方式做过处理, 通过这种方式创建出来的*文件*(template, controller 和 test文件)与*变量*(controller, controllerAs 和 test 等)名称会自动转换成驼峰和首字母全大写的写法, 但是当你用驼峰之类的其他命名方式时, 整个名称会被当做一整个单词, 相比后者会有更好的可读性.
 
 ```
 yo angular:route halo-yeoman
 ```