# 模型常用Field和参数
### 常用组件
* AutoField: 自动增长的整数类型字段，通常不指定
* BigAutoField: 64位整数类型，通常不指定
* BooleanField: 布尔类型，值为True或False
* CharField: 字符串类型，必须指定max_length参数
* DateField: 日期类型，格式为YYYY-MM-DD，`auto_now`:每次保存时都使用当前时间，`auto_now_add`:只在第一次保存时使用当前时间
* DateTimeField: 日期时间类型，格式为YYYY-MM-DD HH:MM[:ss[.uuuuuu]][TZ]
* EmailField: 字符串类型，用于存储电子邮件地址
* FileField: 字符串类型，用于存储文件路径
* FloatField: 浮点数类型
* ImageField: 字符串类型，用于存储图片路径
* IntegerField: 整数类型
* BigIntegerField: 64位整数类型
* PositiveIntegerField: 正整数类型
* PositiveSmallIntegerField: 小正整数类型
* SlugField: 字符串类型，用于存储URL的一部分
* SmallIntegerField: 小整数类型
* TextField: 用于存储大文本
* URLField: 字符串类型，用于存储URL
* TextField: 用于存储大文本
* URLField: 字符串类型，用于存储URL
* UUIDField: 字符串类型，用于存储UUID

### 常用参数
* null: 如果为True，Django将数据库中的该字段存储为NULL，默认为False
* blank: 如果为True，该字段允许为空，表单验证级别
* default: 字段的默认值
* primary_key: 如果为True，该字段为主键
* db_column: 指定数据库中的列名
* unique: 如果为True，该字段的值必须唯一

```python
class Book(models.Model):
    title = models.CharField(max_length=100)
    publication_date = models.DateField(auto_now_add=True)
```

## Meta配置
* db_table: 指定数据库中的表名
* ordering: 指定默认的排序方式

```python
class Book(models.Model):
    title = models.CharField(max_length=100)
    publication_date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'books'
        ordering = ['-publication_date', 'title']
```
