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
  id: number;
  title: string;
  year: string;
  date: string;
  url?: string;
}
export interface ICaseResult {
  id: number;
  year: string;
  items: ICaseResultItem[]
}