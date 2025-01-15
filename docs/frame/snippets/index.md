---
title: snippets
---

## `node` 中查找父级目录的代码

```js
'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function findParent(currentDir, name) {
  const dirs = currentDir.split(path.sep)

  while (dirs.pop()) {
    const dir = dirs.join(path.sep)

    if (fs.existsSync(path.join(dir, name))) {
      return path.resolve(dir)
    }
  }
}
```

使用时，可以这样：

```js
const findParent = require('./findParent')

const parentDir = findParent(process.cwd(), 'package.json')
console.log(parentDir)
```

## `vite` 中对于最近 `commit` 的日志输出

[`vite` 源码链接备忘](https://github.com/oneyoung19/fork-vite/tree/main/scripts)

```ts
// scripts/releaseUtils.ts
export async function logRecentCommits(pkgName: string): Promise<void> {
  const tag = await getLatestTag(pkgName)
  if (!tag) return
  const sha = await run('git', ['rev-list', '-n', '1', tag], {
    stdio: 'pipe',
  }).then((res) => res.stdout.trim())
  console.log(
    colors.bold(
      `\n${colors.blue(`i`)} Commits of ${colors.green(
        pkgName,
      )} since ${colors.green(tag)} ${colors.gray(`(${sha.slice(0, 5)})`)}`,
    ),
  )
  await run(
    'git',
    [
      '--no-pager',
      'log',
      `${sha}..HEAD`,
      '--oneline',
      '--',
      `packages/${pkgName}`,
    ],
    { stdio: 'inherit' },
  )
  console.log()
}
```

另外，`vite` 中对于 `monorepo` 日志的处理，使用 ``

```ts
// scripts/release.ts
release({
  repo: 'vite',
  packages: ['vite', 'create-vite', 'plugin-legacy'],
  toTag: (pkg, version) =>
    pkg === 'vite' ? `v${version}` : `${pkg}@${version}`,
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
    if (pkgName === 'create-vite') await updateTemplateVersions()

    console.log(colors.cyan('\nGenerating changelog...'))
    const changelogArgs = [
      'conventional-changelog',
      '-p',
      'angular',
      '-i',
      'CHANGELOG.md',
      '-s',
      '--commit-path',
      '.',
    ]
    if (pkgName !== 'vite') changelogArgs.push('--lerna-package', pkgName)
    await run('npx', changelogArgs, { cwd: `packages/${pkgName}` })
    // conventional-changelog generates links with short commit hashes, extend them to full hashes
    extendCommitHash(`packages/${pkgName}/CHANGELOG.md`)
  },
})
```
