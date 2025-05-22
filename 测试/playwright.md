# 使用playwright codegen进行自动化测试

## 初始化项目
node版本>=18
```shell
npm init playwright
```

## 运行
需要将{url}改成需要测试的网站地址，如：npx playwright codegen https://www.baidu.com
```shell
npx playwright codegen {url}
```
执行完后修改/tests/xxx.spec.ts文件，添加断言，然后运行
```ts
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // ...

  // 添加快照
  await expect(page).toHaveScreenshot();
});
```

## 运行测试
```shell
npx playwright test
npx playwright test --ui
```
