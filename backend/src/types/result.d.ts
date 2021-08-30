// 首页数据
export interface IHomeResult {
  id: string | number;
  title: string;
  image?: string;
  date: string;
  describe: string;
} 

// 文章详情数据
export interface IHomeDetail {
  id: string | number;
  title: string;
  date: string;
  content: string;
}