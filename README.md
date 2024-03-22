# AnglarBuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
生成组件：ng generate component component-name 或简写为 ng g c component-name
生成服务：ng generate service service-name 或简写为 ng g s service-name
生成模块：ng generate module module-name 或简写为 ng g m module-name
生成指令：ng generate directive directive-name 或简写为 ng g d directive-name
生成管道：ng generate pipe pipe-name 或简写为 ng g p pipe-name
生成类：ng generate class class-name 或简写为 ng g cl class-name
生成接口：ng generate interface interface-name 或简写为 ng g i interface-name
创建新模块
ng generate module my-module
生成组件模块(创建文件)：
ng generate component my-component
生成服务模块：
ng generate service my-service
node 版本：18.19
ui 框架：https://angular.io/api/core/Component#animations
table：https://primeng.org/

npm install -g @angular/cli
ng new my-angular-app
cd my-angular-app
ng serve
创建项目第一个配置选 N（不开启 Universal SSR 模式）
启动：ng serve || ng serve --port 4300
打包（开发环境的构建）：ng build
打包（生产环境构建，进一步优化代码和缩小）：ng build --configuration=production
打包大小限制：angular.json==>budgets==>maximumError
打包静态资源引入地址：index.html 里的<base href="/browser/">
修改打包配置：anglar.js==>architect==>build==>options
