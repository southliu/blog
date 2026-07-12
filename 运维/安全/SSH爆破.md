# SSH爆破
### 1. 关闭用户密码登录，改用key登录
修改ssh配置
```ssh
vim /etc/ssh/sshd_config
```

编辑 sshd_config
```
PermitRootLogin no          # 禁止root直接登录
PasswordAuthentication no   # 彻底关闭密码登录，只能密钥
ChallengeResponseAuthentication no
```

### 2. 自动拦截工具（fail2ban，爆破多次自动拉黑 IP）
安装
```bash
# CentOS7/8
yum install fail2ban -y
# Ubuntu/Debian
apt install fail2ban -y
```

配置规则
```bash
vim /etc/fail2ban/jail.local
```

```
[sshd]
enabled = true
port = 22  # 你的ssh端口
filter = sshd
logpath = /var/log/secure
maxretry = 5      # 输错5次密码拉黑
bantime = 86400   # 拉黑24小时（单位秒）
findtime = 300    # 5分钟内累计失败即触发
```

开机启动
```bash
systemctl start fail2ban
systemctl enable fail2ban
```

常用命令
```bash
# 查看拉黑IP列表
fail2ban-client status sshd
# 手动解封IP
fail2ban-client set sshd unbanip 192.168.1.1
```
