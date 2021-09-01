// 首页数据
export interface IHomeResult {
  id: string | number;
  title: string;
  image?: string;
  date: string;
  describe: string;
} 

// 文章详情数据
export interface IHomeDetailResult {
  id: string | number;
  title: string;
  date: string;
  content: string;
  prev?: string | number;
  next?: string | number;
}

// 项目数据
interface ICaseResultItem {
  id: string | number;
  title: string;
  year: string;
  date: string;
}
export interface ICaseResult {
  year: string;
  items: ICaseResultItem[]
}