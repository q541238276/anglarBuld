// 菜单
export interface MenuList {
  level: number;
  title: string;
  selected: boolean;
  disabled: boolean;
  icon?: string;
  open?: boolean;
  path?: string;
  children?: MenuList[]
}
// demos父子级组件对应类型
export interface ParentData {
  name: string;
  age: number;
  sex: number;
}
// demos循环成绩
export interface AchievementList {
  name: string;
  sex: number;
  chinese: number;
  mathematics: number;
  english: number;
  averageScore?: number;
}
// demos循环tree
export interface DeptTree {
  name: string;
  id: string;
  totalUser?: number;
  children?: DeptTree[];
}
// user表格
export interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
// primeng表格
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
// service-demo里的用户
export interface UserInfo {
  id: string;
  state: number;
  name: string;
  age:number;
  sex:number;
  headerImg?:string;
}