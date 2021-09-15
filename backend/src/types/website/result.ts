// 首页数据
export interface IHomeResult {
  id: number;
  title: string;
  image?: string;
  date: string;
  describe: string;
} 

// 文章详情数据
export interface IHomeDetailResult {
  id: number;
  title: string;
  date: string;
  content: string;
  prev?: string | number;
  next?: string | number;
}

// 项目数据
export interface ICaseResultItem {
  id: number;
  title: string;
  year: string;
  date: string;
}

export interface ICaseResult {
  year: string;
  items: ICaseResultItem[]
}