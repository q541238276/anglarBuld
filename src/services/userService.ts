import { UserInfo } from '../common/shared.model'
import { Injectable } from '@angular/core'
@Injectable({
  providedIn:'root'
})
export class UserInfoService {
  private userInfo: UserInfo={
    id: '',
    state: 1,
    name: '',
    age:18,
    sex:1,
    headerImg:''
  };
  
  constructor() { }
  // 获取整个userInfo
  getUserInfo():UserInfo{
    return this.userInfo
  }
  
  // 更新userInfo
  updateUserInfo(data:UserInfo):void{
    this.userInfo=data
  }
}