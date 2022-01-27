# Go基础类型转换
### string类型转int类型
```
int,err := strconv.Atoi(string)
```
### string类型转int64类型
```
int64,err := strconv.ParseInt(string, 10, 64)
```
### int类型转string类型
```
string := strconv.Itoa(int)
```
### int64类型转string
```
string := strconv.FormatInt(int64, 10)
```
### string类型转float32/float64
```
float32,err := strconv.ParseFloat(str, 32)
float64,err := strconv.ParseFloat(str, 64)
```
### int64类型转int类型
```
int := int(int64)
```
### int类型转int64类型
```
int64 := int(int)
```