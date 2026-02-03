import { globby } from 'globby'
import fs from 'node:fs'

const paths = await globby(['docs/**/*.md'])

export default function getSidebar() {
  const sectionMap = new Map<string, { hasRootFile: boolean; subDirs: Set<string> }>()

  for (const path of paths) {
    const pathList = path.split('/')
    const topLevel = pathList[1]
    if (!topLevel || topLevel.endsWith('.md')) {
      continue
    }

    const entry = sectionMap.get(topLevel) ?? {
      hasRootFile: false,
      subDirs: new Set<string>()
    }

    const depth = pathList.length - 1
    const fileName = pathList[pathList.length - 1]

    if (depth === 2) {
      if (fileName !== 'index.md') {
        entry.hasRootFile = true
      }
    } else if (depth >= 3) {
      const subDir = pathList[2]
      if (subDir && !subDir.endsWith('.md')) {
        entry.subDirs.add(subDir)
      }
    }

    sectionMap.set(topLevel, entry)
  }

  const targetPaths: string[] = []

  for (const [topLevel, entry] of sectionMap.entries()) {
    if (entry.hasRootFile || entry.subDirs.size === 0) {
      targetPaths.push(topLevel)
      continue
    }
    for (const subDir of entry.subDirs) {
      targetPaths.push(`${topLevel}/${subDir}`)
    }
  }

  return [...new Set(targetPaths)]
}
