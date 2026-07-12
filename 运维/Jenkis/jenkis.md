# Docker安装Jenkins
### lts是长期稳定版
```shell
docker pull jenkins/jenkins
```

### 创建docker网络
```bash
docker networks ls
docker network create jenkins
```

### 创建jenkins文件夹
```shell
mkdir -p /home/jenkins_home
```

### 运行jenkins容器
* detach 运行后，容器在后台运行
* restart 总是重启
* publish 映射端口
* volume 映射目录
* name 容器名称
```shell
docker run --detach \
--restart always \
--network jenkins \
--name jenkins \
--publish 9090:8080 \
--publish 50000:50000 \
--volume /home/jenkins_home:/var/jenkins_home \
jenkins/jenkins
```

### 如果运行报错
```shell
docker rm jenkins
chown -R 1000:1000 /home/jenkins\_home
docker run --detach \
--restart always \
--network jenkins \
--name jenkins \
--publish 9090:8080 \
--publish 50000:50000 \
--volume /home/jenkins_home:/var/jenkins_home \
jenkins/jenkins
```

### 打开浏览器访问 http://localhost:9090，显示需要输入密码
```shell
docker logs jenkins
```

### 日志中e07bac5c11d9444b8ec7ffc6是密码，安装推荐插件
```
[LF]> 
[LF]> *************************************************************
[LF]> *************************************************************
[LF]> *************************************************************
[LF]> 
[LF]> Jenkins initial setup is required. An admin user has been created and a password generated.
[LF]> Please use the following password to proceed to installation:
[LF]> 
[LF]> e07bac5c11d9444b8ec7ffc6
[LF]> 
[LF]> This may also be found at: /var/jenkins_home/secrets/initialAdminPassword
[LF]> 
[LF]> *************************************************************
[LF]> *************************************************************
[LF]> *************************************************************
```

### 查看初始密码
```shell
cd ..
cd home/jenkins_home/
cd secrets/
# 查看初始密码
cat initialAdminPassword
```

# 创建jenkins流水线
新建任务->流水线->Configure->流水线
```groovy
pipeline {
    agent any

    stages {
        stage('Git Clone') {
            steps {
                echo 'Git Clone'
                sh 'git clone git@github.com:southliu/visa-fastapi.git'
            }
        }
    }
}
```

### 配置SSH密钥
```bash
# 进入docker容器命令
docker exec -it jenkins /bin/bash
ssh-keygen -t ed25519 -C "1275093225@qq.com"
cat ~/.ssh/id_ed25519.pub

# 容器信任github，使用新终端打开：
docker exec -it --user root jenkins bash
ssh -T git@github.com

# 添加ssh文件权限
chmod 700 /var/jenkins_home/.ssh
chmod 600 /var/jenkins_home/.ssh/id_*
```