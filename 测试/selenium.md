# 安装selenium
```bash
pip install selenium
```

# 安装浏览器驱动
- [Chrome驱动下载](https://sites.google.com/a/chromium.org/chromedriver/downloads)
- [Firefox驱动下载](https://github.com/mozilla/geckodriver/releases)

# 代码编写
```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

url = 'https://baidu.com'

# 初始化浏览器
def init():
    # 创建浏览器对象
    q1 = Options()
    # 禁用沙盒模式(增加兼容性)
    q1.add_argument("--no-sandbox")
    # 保存浏览器打开状态(默认上代码执行完毕自动关闭)
    q1.add_experimental_option("detach", True)

    # 创建并启动浏览器
    a1 = webdriver.Chrome(options=q1)
    # 隐性等待10s，然后元素出来则立马执行，没有找到元素则报错
    a1.implicitly_wait(10)
    return a1

a1 = init()
a1.get(url)
# 设置浏览器位置
# a1.set_window_position(0, 0)
# 设置浏览器尺寸
# a1.set_window_size(600, 600)
# 浏览器截图
# a1.get_screenshot_as_file('1.png')

# time.sleep(3)
# # 刷新当前页面
# a1.refresh()

# time.sleep(2)
# 浏览器最大化
a1.maximize_window()

# # 定位一个输入框元素
# a2 = a1.find_element(By.ID, 'kw')
# # 定位多个元素
# # a2 = a1.find_elements(By.ID, 'kw')
# print(a2)
# a2.send_keys('python')
# # 定位按钮元素
# btn = a1.find_element(By.ID, 'su')
# btn.click()

# time.sleep(2)
# # 清空输入框
# a2.clear()

# 使用name定位
# a2 = a1.find_element(By.NAME, 'wd')

# # 使用class定位
# a2 = a1.find_element(By.CLASS_NAME, 's_ipt')
# a2.send_keys('python')
# # className不能有空格，否则报错
# btn = a1.find_element(By.CLASS_NAME, 's_btn')
# btn.click()

# 使用tag定位
# a2 = a1.find_elements(By.TAG_NAME, 'input')[7]
# a2.send_keys('python')

# 元素定位linkText，只针对<a>标签，精准查找
# a2 = a1.find_element(By.LINK_TEXT, '新闻')
# a2.click()

# 元素定位partialLinkText，只针对<a>标签，模糊查找
# a2 = a1.find_element(By.PARTIAL_LINK_TEXT, '新')
# a2.click()

# 元素定位css_selector
# a2 = a1.find_element(By.CSS_SELECTOR, '#kw')
# a2 = a1.find_element(By.CSS_SELECTOR, 'input') # tagName
# a2 = a1.find_element(By.CSS_SELECTOR, '.s_ipt') # class
# name等自定义属性
# [类型=精准值]
# [类型*=模糊值]
# [类型^=开头值]
# [类型$=结尾值]
# a2 = a1.find_element(By.CSS_SELECTOR, '[name=wd]')
# a2.send_keys('python')

# 元素定位xpath
# a2 = a1.find_element(By.XPATH, '//*[@id="kw"]')
# a2.send_keys('python')

# 上传文件
# a2 = a1.find_element(By.ID, 'upload')
# a2.send_keys(r'/Users/south/Desktop/case/selenium_demo/1.png')

# 获取全部标签页句柄
# a2 = a1.window_handles
# print(a2)
# # 关闭当前标签页
# a1.close()
# # 切换到指定标签页
# a1.switch_to.window(a2[0])
# 获取当前标签页句柄
# a2 = a1.current_window_handle

# 确定alert/confirm弹窗
# a1.switch_to.alert.accept()
# 关闭alert/confirm弹窗
# a1.switch_to.alert.dismiss()
# 弹窗内输入内容
# a1.switch_to.alert.send_keys('python')

# 网络前进
# a1.forward()
# 网络后退
# a1.back()

time.sleep(3)
# 退出
a1.quit()
```
