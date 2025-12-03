### huggingface-cli
huggingface-cli 是 Hugging Face 官方提供的命令行工具，自带完善的下载功能。

1. 安装依赖
```
pip install -U huggingface_hub
```
2. 设置环境变量
Linux
```
export HF_ENDPOINT=https://hf-mirror.com
```
Windows
```
$env:HF_ENDPOINT = "https://hf-mirror.com"
```
建议将上面这一行写入 ~/.bashrc。
3.1 下载模型
```
huggingface-cli download --resume-download gpt2 --local-dir gpt2
```
3.2 下载数据集
```
huggingface-cli download --repo-type dataset --resume-download wikitext --local-dir wikitext
```
可以添加 --local-dir-use-symlinks False 参数禁用文件软链接，这样下载路径下所见即所得，详细解释请见上面提到的教程。

### 无法访问huggingface
#### 报错：
(MaxRetryError("HTTPSConnectionPool(host='huggingface.co', port=443): Max retries exceeded with url: /Qwen/Qwen3-Embedding-0.6B/resolve/main/modules.json (Caused by ConnectTimeoutError(<urllib3.connection.HTTPSConnection object at 0x124e3dc60>, 'Connection to huggingface.co timed out. (connect timeout=10)'))")

#### 解决方案：设置环境变量
