import { globby } from 'globby'
import fs from 'node:fs'

const paths = await globby(['docs/**/README.md'])

paths.forEach((path) => {
  fs.rename(path, path.replace(/README\.md/, 'index.md'), (err) => {
    !err && console.log(`${path} 重命名成功`)
  })
})
