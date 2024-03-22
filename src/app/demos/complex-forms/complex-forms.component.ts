import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-complex-forms',
  standalone: true,
  imports: [
    NzFormModule,
    FormsModule,
    NzInputModule,
    CommonModule,
    NzButtonModule,
    NzSelectModule,
  ],
  templateUrl: './complex-forms.component.html',
  styleUrl: './complex-forms.component.css',
})
export class ComplexFormsComponent {
  fields = [
    {
      id: '0_0_97caff48c0ee',
      groupId: '0_0_f1968047ce7e',
      globalId: 6,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: null,
      globalFieldName: '客户行业',
      sortIndex: 3006,
      typeIndex: 1,
      inputTypeIndex: 3,
      optionSourceTypeIndex: 1,
      fixed: true,
      customerFieldOptions: [
        {
          id: '0_0_b073407ace91',
          groupId: '0_0_f1968047ce7e',
          value: '企业',
          globalId: '6',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_854cd9e0ce10',
          groupId: '0_0_f1968047ce7e',
          value: '政府',
          globalId: '6',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_93012120c8cf',
          groupId: '0_0_f1968047ce7e',
          value: '医疗',
          globalId: '6',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_1c033c3acfef',
          groupId: '0_0_f1968047ce7e',
          value: '其他',
          globalId: '6',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_2cad2226c0ef',
          groupId: '0_0_f1968047ce7e',
          value: '教育',
          globalId: '6',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
      ],
    },
    {
      id: '0_0_f50cdcc0c865',
      groupId: '0_0_f1968047ce7e',
      globalId: 8,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: 'maturityOptionId',
      globalFieldName: '成熟度',
      sortIndex: 3009,
      typeIndex: 1,
      inputTypeIndex: 2,
      optionSourceTypeIndex: 1,
      fixed: true,
      customerFieldOptions: [
        {
          id: '0_0_0a804110ca19',
          groupId: '0_0_f1968047ce7e',
          value: 'C-：初步联系，意向不确定',
          globalId: '8,54',
          sortIndex: 5,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_96fb858cc1ee',
          groupId: '0_0_f1968047ce7e',
          value: 'A+：明确成交意向',
          globalId: '8,54',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_2fd9f572cee9',
          groupId: '0_0_f1968047ce7e',
          value: 'B+：关键人有成交意向',
          globalId: '8,54',
          sortIndex: 2,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_01e40780cbf2',
          groupId: '0_0_f1968047ce7e',
          value: 'C+：初步联系，有意向',
          globalId: '8,54',
          sortIndex: 4,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_c2f2fbbacc17',
          groupId: '0_0_f1968047ce7e',
          value: 'A-：有初步成交意向',
          globalId: '8,54',
          sortIndex: 1,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_be791ed6c479',
          groupId: '0_0_f1968047ce7e',
          value: 'F：已购买',
          globalId: '8,54',
          sortIndex: 8,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_342bec9cc848',
          groupId: '0_0_f1968047ce7e',
          value: 'E：明显拒绝',
          globalId: '8,54',
          sortIndex: 7,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_9889bf09cf07',
          groupId: '0_0_f1968047ce7e',
          value: 'B-：关键人成交意向不确定',
          globalId: '8,54',
          sortIndex: 3,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_4b6cfd61c3b7',
          groupId: '0_0_f1968047ce7e',
          value: 'D：新建客户',
          globalId: '8,54',
          sortIndex: 6,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
      ],
    },
    {
      id: '0_0_3b17e36ec7f4',
      groupId: '0_0_f1968047ce7e',
      globalId: 1,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: 'name',
      globalFieldName: '客户/公司名称',
      sortIndex: 3001,
      typeIndex: 1,
      inputTypeIndex: 0,
      optionSourceTypeIndex: 0,
      fixed: true,
      customerFieldOptions: null,
    },
    {
      id: '0_0_d6ae5223c576',
      groupId: '0_0_f1968047ce7e',
      globalId: 5,
      enable: true,
      tipInfo: null,
      placeholder: '请选择省市区县',
      mappingField: null,
      globalFieldName: '所在地',
      sortIndex: 3005,
      typeIndex: 1,
      inputTypeIndex: 5,
      optionSourceTypeIndex: 0,
      fixed: true,
      customerFieldOptions: null,
    },
    {
      id: '0_0_b3c68ec4c49a',
      groupId: '0_0_f1968047ce7e',
      globalId: 2,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: 'levelOptionId',
      globalFieldName: '客户级别',
      sortIndex: 3007,
      typeIndex: 1,
      inputTypeIndex: 2,
      optionSourceTypeIndex: 1,
      fixed: true,
      customerFieldOptions: [
        {
          id: '0_0_6cb66d03c224',
          groupId: '0_0_f1968047ce7e',
          value: '次要客户',
          globalId: '2',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_b2b2b4b7c478',
          groupId: '0_0_f1968047ce7e',
          value: '一般客户',
          globalId: '2',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_e0475f12c033',
          groupId: '0_0_f1968047ce7e',
          value: '重要客户',
          globalId: '2',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_bc02bc1fc505',
          groupId: '0_0_f1968047ce7e',
          value: '标杆客户',
          globalId: '2',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
      ],
    },
    {
      id: '0_0_2586ed80cdab',
      groupId: '0_0_f1968047ce7e',
      globalId: 3,
      enable: true,
      tipInfo: '意向我司产品',
      placeholder: '',
      mappingField: null,
      globalFieldName: '意向产品',
      sortIndex: 3003,
      typeIndex: 1,
      inputTypeIndex: 3,
      optionSourceTypeIndex: 1,
      fixed: true,
      customerFieldOptions: [
        {
          id: '0_0_8b6b946ecd17',
          groupId: '0_0_f1968047ce7e',
          value: '3D机房',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_fdb50084cdcf',
          groupId: '0_0_f1968047ce7e',
          value: '机房动环',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_f9c79b56c259',
          groupId: '0_0_f1968047ce7e',
          value: '桌面管理',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_7510a8a7c098',
          groupId: '0_0_f1968047ce7e',
          value: '综合运维',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_26283f13c8f5',
          groupId: '0_0_f1968047ce7e',
          value: '翼维产品',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_1deaf77ecb5b',
          groupId: '0_0_f1968047ce7e',
          value: '运维流程',
          globalId: '3,15,41',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
      ],
    },
    {
      id: '0_0_57abb7e6ce4b',
      groupId: '0_0_f1968047ce7e',
      globalId: 12,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: null,
      globalFieldName: '决策链',
      sortIndex: 3016,
      typeIndex: 1,
      inputTypeIndex: 0,
      optionSourceTypeIndex: 0,
      fixed: false,
      customerFieldOptions: null,
    },
    {
      id: '0_0_95b16f93cdba',
      groupId: '0_0_f1968047ce7e',
      globalId: 7,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: 'stateOptionId',
      globalFieldName: '客户状态',
      sortIndex: 3008,
      typeIndex: 1,
      inputTypeIndex: 2,
      optionSourceTypeIndex: 1,
      fixed: true,
      customerFieldOptions: [
        {
          id: '0_0_8d845b10ce26',
          groupId: '0_0_f1968047ce7e',
          value: '成交客户',
          globalId: '7,53',
          sortIndex: 3,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_3ce88d5dc30a',
          groupId: '0_0_f1968047ce7e',
          value: '已流失客户',
          globalId: '7,53',
          sortIndex: 5,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_951698a6cd13',
          groupId: '0_0_f1968047ce7e',
          value: '测试阶段',
          globalId: '7,53',
          sortIndex: 6,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_81232a16c87e',
          groupId: '0_0_f1968047ce7e',
          value: '交付中',
          globalId: '7,53',
          sortIndex: 7,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_8f89b985c392',
          groupId: '0_0_f1968047ce7e',
          value: '失败客户',
          globalId: '7,53',
          sortIndex: 4,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_2c0e9388cb23',
          groupId: '0_0_f1968047ce7e',
          value: '潜在客户',
          globalId: '7,53',
          sortIndex: 1,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_e0da41dac2b7',
          groupId: '0_0_f1968047ce7e',
          value: '售后服务',
          globalId: '7,53',
          sortIndex: 0,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
        {
          id: '0_0_0ec3d4c6c480',
          groupId: '0_0_f1968047ce7e',
          value: '意向客户',
          globalId: '7,53',
          sortIndex: 2,
          selectDefault: false,
          start: null,
          end: null,
          inputType: 0,
          searchFieldId: null,
        },
      ],
    },
    {
      id: '0_0_d2f8d077c759',
      groupId: '0_0_f1968047ce7e',
      globalId: 4,
      enable: true,
      tipInfo: null,
      placeholder: '',
      mappingField: null,
      globalFieldName: '首建时间',
      sortIndex: 3004,
      typeIndex: 1,
      inputTypeIndex: 1,
      optionSourceTypeIndex: 0,
      fixed: true,
      customerFieldOptions: null,
    },
  ];
  fieldsValueMap: { [key: string]: any } = {};
  ngOnInit(): void {
    console.log(this.fields);
    this.fields.forEach((item) => {
      let id: string = item.id as string;
      this.fieldsValueMap[id] = ''; // 将字段的 id 作为对象的属性
    });
  }
  getFieldMap(): void {
    console.log(this.fieldsValueMap);
  }
}
