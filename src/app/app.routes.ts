import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {IndexComponent} from './index/index.component'
import { FatherComponent } from './demos/father/father.component'
import { InputBindValComponent } from './demos/input-bind-val/input-bind-val.component'
import { NgLogicComponent } from './demos/ng-logic/ng-logic.component'
import { RequestDemoComponent } from './demos/request-demo/request-demo.component'
import { TablesComponent } from './demos/tables/tables.component'
import { PrimengTableComponent } from './demos/primeng-table/primeng-table.component'
import {ServiceDemoComponent} from './demos/service-demo/service-demo.component'
import {ComplexFormsComponent} from './demos/complex-forms/complex-forms.component'
export const routes: Routes = [
  { path: 'login', component: LoginComponent },       // 登录
  {
    path: '',
    component: HomeComponent, // 使用布局组件的路径
    children: [
      { path: '', component: IndexComponent },       // 默认路由
      { path: 'fatherComponent', component: FatherComponent },       // 父子级组件传参
      { path: 'inputBindVal', component: InputBindValComponent },       // 数据双向绑定
      { path: 'ngLogic', component: NgLogicComponent },       // 循环、条件渲染
      { path: 'requestDemo', component: RequestDemoComponent },       // 网络请求
      { path: 'tables', component: TablesComponent },       // antdTable
      { path: 'primengTable', component: PrimengTableComponent },       // primengTable
      { path: 'serviceDemo', component: ServiceDemoComponent },       // service单例，类似vuex
      { path: 'complexForms', component: ComplexFormsComponent },       // primengTable
    ]
  }
];
