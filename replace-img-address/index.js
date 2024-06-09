const path = require('path')
const fs = require('fs')
const sh = require('shelljs')
// 检索目录
const dirname = path.resolve(__dirname, '../docs')
// 本地图片目录
const imgDirname = path.resolve(__dirname, './dist/vuepress-blog-img')
// 远程图片库
const remoteImgAddress = 'git@github.com:oneyoung19/vuepress-blog-img.git'
// 远程图片分支
const remoteImgBranch = 'Not-Count-Contribution'
// 提交信息
const commitMsg = '"replace ipic address"'
// sina地址正则
const sinaReg = /https:\/\/tva1\.sinaimg\.cn\/large\/([0-9a-zA-Z]*)\.(jpg|png|image)/g
// 稀土掘金正则
const goldReg = /https:\/\/p1-jj.byteimg.com\/tos-cn-i-t2oaga2asx\/gold-user-assets\/2020\/5\/9\/([0-9a-zA-Z~-]*).(jpg|png|image)/g
// ipic正则
const ipicReg = /https:\/\/p.ipic.vip\/([0-9a-zA-Z]*).(jpg|png|image)/g
// 图片正则 => https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/
const imgReg = ipicReg
// sina地址集合
const sinaSet = new Set()

function addImgSet (dirname) {
  const files = fs.readdirSync(dirname)
  const { length } = files
  for (let i = 0;i < length;i++) {
    const name = files[i]
    if (name === '.DS_Store' || name === '.vuepress') {
      continue
    } else {
      // 判断是文件还是目录
      const targetName = `${dirname}/${name}`
      const stat = fs.statSync(targetName)
      if (stat.isDirectory()) {
        // 是目录的话 继续读取下一层
        addImgSet(targetName)
      } else {
        // 是文件的话 判断文件后缀是否.md
        const extname = path.extname(name)
        if (extname === '.md') {
          // 读取文件内容 筛选出所有的sina地址
          const content = fs.readFileSync(targetName).toString()
          let result
          while((result = imgReg.exec(content)) !== null) {
            const [ fullPath, captureOne, captureTwo ] = result
            const arr = [...sinaSet.values()]
            if (arr.some(item => item.fullPath === fullPath)) {
              continue
            } else {
              sinaSet.add({
                fullPath,
                captureOne,
                captureTwo
              })
            }
          }
        }
      }
    }
  }
}
addImgSet(dirname)

// 创建一个dist目录 拉取 https://github.com/oneyoung19/vuepress-blog-img
sh.exec(`
rm -rf dist
mkdir dist
cd dist
git clone ${remoteImgAddress}
cd vuepress-blog-img
git checkout -b ${remoteImgBranch}
git pull origin ${remoteImgBranch}
`)

// 将set中的文件写入
if (fs.existsSync(imgDirname)) {
  sinaSet.forEach(item => {
    const { fullPath, captureOne, captureTwo } = item
    sh.exec(`curl ${fullPath} --output ${imgDirname}/img/${captureOne}.${captureTwo}`)
  })

  sh.exec(`
  cd ${imgDirname}
  git add .
  git commit -m ${commitMsg}
  git push origin ${remoteImgBranch}
  `)
}
