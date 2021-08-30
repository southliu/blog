/**
 * @describe 首页数据
 */
export interface IHomeResult {
  id: string | number;
  title: string;
  image?: string;
  date: string;
  describe: string;
} 


/**
 * @describe 博客卡片数据
 */
 export type IBlogCard = {
  id: string | number;
  title: string;
  image?: string;
  date: string;
  describe: string;
}