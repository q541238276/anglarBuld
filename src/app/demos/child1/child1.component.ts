import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ParentData } from '../../../common/shared.model'
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Input() parentMessage = ''; // decorate the property with @Input()
  @Input() parentObj: ParentData = {
    name: '',
    age: 0,
    sex: 0
  }; // decorate the property with @Input()
  clonedParentObj: ParentData = {
    name: '',
    age: 0,
    sex: 0
  };
  @Output() clonedParentObjChange: EventEmitter<ParentData> = new EventEmitter<ParentData>(); // Define an output event
  constructor() {
    this.updateClonedParentObj();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('parentObj' in changes) {
      this.updateClonedParentObj();
    }
  }
  private updateClonedParentObj(): void {
    this.clonedParentObj = Object.assign({}, this.parentObj);
  }
  addUserAge(): void {
    this.parentObj.age++
  };
  addUserAge2(): void {
    this.clonedParentObj.age++;
  };
  emitClonedParentObj(): void {
    this.clonedParentObjChange.emit(this.clonedParentObj);
  }
  // 公共方法，供父组件调用获取clonedParentObj的值
  getClonedParentObj(): ParentData {
    return this.clonedParentObj;
  }
  // 公共方法，供父组件调用改变clonedParentObj的值
  chengClonedParentAge(): void {
    this.clonedParentObj.age--;
  }
}
