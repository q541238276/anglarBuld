import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuList } from '../../common/shared.model';
import { HeaderComponent } from '../components/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  isCollapsed = false;
  title = 'my-angular-app';
  mode = false;
  dark = false;
  menus: MenuList[] = [
    {
      level: 1,
      title: '首页',
      icon: 'icon-mima',
      open: true,
      selected: true,
      disabled: false,
      path: '/',
    },
    {
      level: 1,
      title: 'demos',
      icon: 'icon-mima',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: '父子级组件',
          icon: 'icon-yonghuming',
          open: false,
          selected: false,
          disabled: false,
          path: 'fatherComponent',
        },
        {
          level: 2,
          title: '数据双向绑定',
          icon: 'icon-yonghuming',
          selected: true,
          disabled: false,
          path: 'inputBindVal',
        },
        {
          level: 2,
          title: '循环、条件渲染',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'ngLogic',
        },
        {
          level: 2,
          title: '网络请求',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'requestDemo',
        },
        {
          level: 2,
          title: '表格',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'tables',
        },
        {
          level: 2,
          title: 'primeng表格',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'primengTable',
        },
        {
          level: 2,
          title: '单例service获取user',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'serviceDemo',
        },
        {
          level: 2,
          title: '复杂表单',
          icon: 'icon-yonghuming',
          selected: false,
          disabled: false,
          path: 'complexForms',
        },
      ],
    },
    {
      level: 1,
      title: 'Team Group',
      icon: 'icon-mima',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: '',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'User 2',
          icon: '',
          selected: false,
          disabled: false,
        },
      ],
    },
  ];
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  jump(e: MenuList): void {
    if (e.path) {
      this.router.navigate([e.path]);
    }
  }
}
