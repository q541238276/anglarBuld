import { Component } from '@angular/core';
import { UserInfoService } from '../../../services/userService'
import { UserInfo } from '../../../common/shared.model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [NzButtonModule,NzFormModule,FormsModule,NzInputModule,NzSwitchModule,NzInputNumberModule,NzSelectModule],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent {
  userInfo:UserInfo={
    id: '',
    state: 1,
    name: '',
    age:18,
    sex:1,
    headerImg:''
  };
  switchValue:boolean=false;
  sexOptions=[
    { label: '男', value: 1},
    { label: '女', value: 0 }
  ]
  constructor(private userInfoService:UserInfoService){}
  ngOnInit():void{
    this.getUserInfo();
  }
  getUserInfo():void{
    this.userInfo=this.userInfoService.getUserInfo()
    this.switchValue=this.userInfo.state?true:false;
  }
  updateUser():void{
    console.log(this.userInfo)
    this.userInfoService.updateUserInfo(this.userInfo)
  }
}
