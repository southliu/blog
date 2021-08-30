import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost', // 数据库地址
  port: 3306, // 端口号
  user: 'root', // 用户名
  password: 'root', // 密码
  database: 'blog', // 数据库名称
  multipleStatements: true // 执行多行
});

export default connection