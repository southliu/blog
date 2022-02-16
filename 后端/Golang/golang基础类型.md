# Go基础类型
### 字符串类型
字符串类型是由双引号("")包裹住的字符
```
var stringVal string = "Hello World"
stringVal := "Hello World"
```
**注意：直接使用单引号('')会报错**
<img src="./images/go_string_error.jpg">
### 单引号('')应该写在双引号内：stringVal := "Hello **'South'**"

### bool布尔型
bool布尔型只有两个值：true和false
```
var boolVal bool = true
boolVal := true
```

### int整数类型
int类型有分int、unint、int8、uint8、int16、uint16、int32、uint32、int64、uint64，**常用int或unint**
* int和uint类型大小为4或8字节，32位或64位
* int8  （大小为1字节，代表2^8，正负各占一半，取值区间为-128 ~ 127）
* uint8 （大小为1字节，代表2^8，由0开始，取值区间为0 ~ 255）
* int16 （大小为2字节，代表2^16，取值区间为-32768 ~ 32767）
* uint16（大小为2字节，代表2^16，取值区间为0 ~ 65535）
* int32 （大小为4字节，代表2^32，取值区间为-2147483648 ~ 2147483647）
* uint32（大小为4字节，代表2^32，取值区间为0 ~ 4294967295）
* int64 （大小为8字节，代表2^64，取值区间为-9223372036854775808 ~ 9223372036854775807）
* uint64（大小为8字节，代表2^64，取值区间为0 ~ 18446744073709551615）
```
var intVal int = 123
intVal := 123
```
**使用unsafe可以查看对应的字节大小:**
```
package main 
import (
 "fmt"
 "unsafe"
) 
func main() {
  var intVal int = 123
  fmt.Println(unsafe.Sizeof(intVal))
}
```

### 浮点型
浮点型有分float32、float64，**常用float64**
* float32（单精度类型，占据4个字节 byte，32个二进制位 bit）
* float64（双精度类型，占据8个字节 byte，64个二进制位 bit）
```
var floatVal float64 = 0.5
floatVal := 0.5
```

### 枚举
通常使用const参量来定义，使用iota自增。
```
const (
  cpp = iota,
  golang,
  java
)
fmt.Println(cpp, golang, java) // 0, 1, 2
```

### byte,rune
### 数字complex64,数字complex128
