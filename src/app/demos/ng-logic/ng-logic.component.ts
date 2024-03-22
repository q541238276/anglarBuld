import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementList, DeptTree } from '../../../common/shared.model'
@Component({
  selector: 'app-ng-logic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-logic.component.html',
  styleUrl: './ng-logic.component.css'
})
export class NgLogicComponent {
  achievementList: AchievementList[] = [
    { name: '张无忌', sex: 1, chinese: 99, mathematics: 100, english: 98, averageScore: 0 },
    { name: '赵敏', sex: 0, chinese: 95, mathematics: 96, english: 91, averageScore: 0 },
    { name: '张翠山', sex: 1, chinese: 94, mathematics: 98, english: 90, averageScore: 0 },
    { name: '殷素素', sex: 0, chinese: 93, mathematics: 96, english: 96, averageScore: 0 },
    { name: '杨过', sex: 1, chinese: 97, mathematics: 99, english: 99, averageScore: 0 },
    { name: '小龙女', sex: 1, chinese: 100, mathematics: 99, english: 100, averageScore: 0 }
  ]
  deptTree: DeptTree[] = [
    {
      name: '总经办', id: '1', children: [
        { name: '行政', id: '1-1', totalUser: 4 },
        { name: '后勤', id: '1-2', totalUser: 4 }
      ]
    },
    {
      name: '研发', id: '2', children: [
        { name: '前端', id: '2-1', totalUser: 6 },
        { name: '后端', id: '2-2', totalUser: 6 }
      ]
    },
    {
      name: '技术', id: '3', children: [
        { name: 'ui', id: '3-1', totalUser: 2 },
        {
          name: '技术', id: '3-2', totalUser: 6, children: [
            { name: '技术支持', id: '3-2-1', totalUser: 1 },
            { name: '测试', id: '3-2-2', totalUser: 1 },
            { name: '现场', id: '3-2-3', totalUser: 4 },
          ]
        },
      ]
    }
  ]
  viewType: number = 1;
  constructor() {
    this.calculateAverageScore();
  }
  calculateAverageScore(): void {
    this.achievementList.forEach(student => {
      let averageScore: string = ((student.chinese + student.mathematics + student.english) / 3).toFixed(2)
      student.averageScore = parseFloat(averageScore);
    });
  }
  changeViewType(): void {
    this.viewType = this.viewType < 3 ? this.viewType + 1 : 1;
  }
}
