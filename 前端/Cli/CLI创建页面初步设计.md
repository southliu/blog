# CLI创建页面初步设计
### 初步设计生成页面指令，根据create-xxx-page判断是哪种框架
```
south create-react-page page-name
or
south creat-vue-page page-name
```
### 页面功能(checkbox)
```
搜索              顶部搜索框
新增-弹窗         当前页新增弹窗
新增-跳转         跳转至新增页面
删除              删除按钮
删除-批量删除      批量删除按钮
分页              分页栏
```
```
当'新增-弹窗'和'新增-跳转'同时勾选时，会被'新增-弹窗'覆盖
```
# 实现CLI提示功能
### 在<kbd>lib/GeneratorPage</kbd>中添加询问功能方法
```TS
async handleFunctions() {
  // 询问基础功能
  const { functions }: { functions: IPageFunctions[] } = await inquirer.prompt({
    name: 'functions',
    type: 'checkbox',
    message: '选择页面功能:',
    choices: [
      { name: '搜索', value: 'search', checked: true },
      { name: '分页', value: 'pagination', checked: true },
      { name: '新增', value: 'create', checked: true },
      { name: '删除', value: 'delete', checked: true },
      { name: '批量删除', value: 'batch-delete' }
    ]
  })

  // 新增类型 create: 弹窗 create-page: 跳转页面
  if (functions.includes('create')) {
    // 询问新增类型
    const { type } = await inquirer.prompt({
      name: 'type',
      type: 'confirm',
      message: '新增是否以弹窗形式展现? Y: 弹窗 n: 跳转'
    })

    // 处理基础功能中的新增类型
    const createIdx = functions.indexOf('create')
    functions[createIdx] = type ? 'create' : 'create-page'
  }

  return functions
}
```
### 得到以下效果：
<img src="./images/2021-11-11.gif">
<br />