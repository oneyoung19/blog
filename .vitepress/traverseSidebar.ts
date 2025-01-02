import { globby } from 'globby'
import fs from 'node:fs'

const paths = await globby(['docs/**/*.md'])

export default function getSidebar() {
  const targetPaths = paths.map(path => {
    const pathArray = path.split('/').slice(1, 3)
    return pathArray.join('/')
  }).filter(item => item && !item.includes('index.md'))
  return [...new Set(targetPaths)]
}
