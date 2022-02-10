# mysql增删改查

### 引入GORM和mysql依赖
```go
import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)
```

### 连接mysql
```go
// 自行修改username为数据库账户、password为数据库密码，db为数据库名
db, err := gorm.Open("mysql", "username:password@/db?charset=utf8mb4&parseTime=True&loc=Local")
```

### 自动迁移
```go
// 自动迁移，如果没有数据库则创建table_data表
	db.AutoMigrate(&TableData{})
```

### 对应表字段
```go
// gorm.Model内置ID、CreatedAt、UpdatedAt、DeletedAt
type TableData struct {
	gorm.Model
	Name     string `form:"name" json:"name"`
	Username string `gorm:"not null"`
	Password string `gorm:"not null"`
	State    int    `gorm:"default:0"`
}
```

### 查询
```go
// 查询单条数据
var simpleData TableData
db.First(&simpleData, "name = ?", "South")
fmt.Println("单条：", simpleData)

// 查询多条数据
var findData []TableData
db.Where("name = ?", "South").Find(&findData)
fmt.Println("多条：", findData)
```

### 修改
```go
// 修改单个项
db.Model(&TableData{}).Where("id = ?", 1).Update("name", "South123")

// 修改多个项
db.Model(&TableData{}).Where("id = ?", 2).Updates(&TableData{
  Name:     "Souths2",
  Username: "Test",
})
```

### 删除
```go
// 删除，当数据库有deleted_at字段是为软删除(引入gorm.Model自带)
db.Model(&TableData{}).Where("id = ?", 3).Delete(&TableData{})
```