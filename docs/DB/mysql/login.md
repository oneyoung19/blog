---
title: 登录
---

在上一节安装完成 `Mysql` 后，我们可以通过 `mysql` 命令来登录 `Mysql` 数据库。

```bash
mysql -u root -p
```

其中 `-u` 表示用户名，`-p` 表示密码。

当执行完上面的命令后，**会提示输入密码**，输入密码后，就可以进入 `Mysql` 数据库了。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405161623.png)

**登录成功之后，就可以使用 `SQL` 进行相关操作了。**

如果忘记了设置的 `root` 密码，可以尝试一下命令来重置密码：

1. 停止 `MySQL` 服务
   
```bash
sudo service mysql stop
```

2. 使用 `--skip-grant-tables` 选项启动 `MySQL` 服务

```bash
sudo mysqld_safe --skip-grant-tables &

# 或者

sudo mysqld --skip-grant-tables &
```

3. 以 `root` 用户身份登录 `MySQL` 数据库

```bash
mysql -u root
```

4. 修改 `root` 用户的密码

```sql
USE mysql;
UPDATE user SET authentication_string=PASSWORD('newpassword') WHERE User='root';
FLUSH PRIVILEGES;
exit;
```

其中 `newpassword` 要替换成你想要设置的新密码。

5. 重启 `MySQL` 服务

```bash
sudo service mysql restart
```
