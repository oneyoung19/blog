import { globby } from 'globby'
import fs from 'node:fs'

const paths = await globby(['docs/**/*.md'])

console.log(paths)

export default function getSidebar() {
  const targetPaths = paths.map(path => {
    return path.split('/').slice(1, -1).join('/')
  })
  return [...new Set(targetPaths)]
}
