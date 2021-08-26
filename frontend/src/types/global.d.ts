/**
 * @describe api响应
 */
export type IResponseData<T> = {
  code: number;
  message?: string;
  data: T
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