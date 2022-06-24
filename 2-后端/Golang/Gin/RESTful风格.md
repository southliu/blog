# RESTful API风格
### GET
```go
r.GET("/south/:id", func(c *gin.Context) {
    id := c.Param("id") // URI数据
    page := c.DefaultQuery("page", "0") // 默认传参，如果前端没传则默认为0
    user := c.Query("user") // 请求数据
    c.JSON(200, gin.H{
        "id": id,
        "user": user,
        "page": page,
    })
})
```

### POST
```go
r.POST("/south", func(c *gin.Context) {
    user := c.PostForm("user") // 传参参数
    pwd := c.DefaultPostForm("pwd", "south") // 默认传参参数
    c.JSON(200, gin.H{
        "message": "post",
        "user": user,
        "pwd": pwd,
    })
})
```

### PATCH
```go
r.PATCH("/south/:id", func(c *gin.Context) {
    id := c.Param("id")
    content := c.PostForm("content")
    c.JSON(200, gin.H{
        "message": "patch",
        "id": id,
        "content": content,
    })
})
```

### PUT
```go
r.PUT("/south/:id", func(c *gin.Context) {
    id := c.Param("id")
    content := c.PostForm("content")
    c.JSON(200, gin.H{
        "message": "put",
        "id": id,
        "content": content,
    })
})
```

### DELETE
```go
r.DELETE("/south/:id", func(c *gin.Context) {
    id := c.Param("id")
    content := c.Query("content")
    c.JSON(200, gin.H{
        "message": "delete",
        "id": id,
        "content": content,
    })
})
```