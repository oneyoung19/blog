---
title: GitHub
---

<demo react="vitepress-demo-plugin.tsx" stackblitz="true" codesandbox="true" />

<demo vue="vitepress-demo-plugin.vue"/>

:::code-group

```shell [npm]
npm install vitepress-plugin-group-icons
```

```shell [yarn]
yarn add vitepress-plugin-group-icons
```

```shell [pnpm]
pnpm add vitepress-plugin-group-icons
```

:::

```ts [vite.config.ts]
export const builtInIcons: Record<string, string> = {
  // package manager
  pnpm: 'logos:pnpm',
  npm: 'logos:npm-icon',
  yarn: 'logos:yarn',
  bun: 'logos:bun',
  // framework
  vue: 'logos:vue',
  svelte: 'logos:svelte-icon',
  angular: 'logos:angular-icon',
  react: 'logos:react',
  next: 'logos:nextjs-icon',
  nuxt: 'logos:nuxt-icon',
  solid: 'logos:solidjs-icon',
  // bundler
  rollup: 'logos:rollupjs',
  webpack: 'logos:webpack',
  vite: 'logos:vitejs',
  esbuild: 'logos:esbuild',
}
```
