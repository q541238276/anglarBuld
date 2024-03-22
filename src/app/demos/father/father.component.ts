import { Component, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { ParentData } from '../../../common/shared.model'
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-father',
  standalone: true,
  imports: [Child1Component, NzButtonModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  @ViewChild(Child1Component) childComponent!: Child1Component;
  parentMessage: string = "Message from parent";
  parentObj: ParentData = {
    name: '张无忌',
    age: 18,
    sex: 1
  }
  // 通过emit方法，接受子组件返回的值
  onClonedParentObjChange(clonedParentObj: ParentData): void {
    this.parentObj = JSON.parse(JSON.stringify(clonedParentObj))
  }
  // 在父组件中的某个方法中获取子组件的clonedParentObj属性值
  getChildClonedParentObj(): void {
    let clonedParentObj: ParentData = this.childComponent.clonedParentObj;
    this.parentObj = { ...clonedParentObj };
    console.log(clonedParentObj)
  }
  // 在父组件改变子组件的数据
  changeChildData(): void {
    this.childComponent.chengClonedParentAge();
    let clonedParentObj: ParentData = this.childComponent.getClonedParentObj();
    console.log(clonedParentObj)
  }
}
