# GO 调试技巧 
GDB 是类Unix的调试工具。
- 断点
- 查看状态

## 使用技巧 
1. 传递参数 -ldflags "-s", 忽略debug的打印信息 
2. 传递参数 -gcflags "-N -l" 忽略Go的优化，比如聚合变量和函数等优化 
## 安装gdb 
``` 
brew install gdb 
```
## 使用步骤 
1. 编译并保持二进制文件 
```
go build -gcflags "-N -l" -o out.bin  main.go 
``` 
2. 进入gdb
gdb out.bin
## 常用命令 
1. list 简写 l
用来显示源代码，显示10行 
list <line num>
例：list 15  显示第15行，即第 10 到 19 行 
2. break 简写 b
b <line num> 
例：b 10 
给第10行打上断点
3. info breakpoints 
查看断点信息列表
4. delete 简写 d 
d <Num>     
例： d 1 
通过info breakpoints 查询的断点 Num 进行删除 
5. backtrace 简写 bt 
打印出 代码执行过程 
6. info 
可选参数 
- info locals
- info breakpoints
- info goroutines
