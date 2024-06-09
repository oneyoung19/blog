1. 读取 `docs` 下所有文件夹和文件 不包含 `.vuepress`

2. 判断要替换的地址 如：`https://tva1.sinaimg.cn/large`

3. 执行 `shell` 中的 `curl` 指令 将图片全部下载到 `./dist` 中

4. 将 `./dist/{name}` 的图片全部上传到 `github` 图床中

5. 上传成功之后，将 `sina` 地址替换成 `github` 地址 如： `https://raw.githubusercontent.com/oneyoung19`

6. **暂且手动替换地址，防止 `markdown` 内容格式变形**。

