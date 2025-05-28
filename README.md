# scaffold-vite-vue-tailwind

```sh
# 現在のディレクトリにコピー
npx degit akifo/scaffold-vite-vue-tailwind .

# my-project ディレクトリを生成し、そこにコピー
npx degit akifo/scaffold-vite-vue-tailwind my-project
```

## prepare

```sh
nr prepare
```

## deploy


### GitHub Pages
.github/workflows/gh-pages.yml を削除すれば、GitHub Pages への Deploy を削除できます。

https://github.com/akifo/scaffold-vite-vue-tailwind/settings/pages で Build and deployment
 を GitHub Actions に変更すると GitHub Actions で自動デプロイが動きます。

https://github.com/akifo/scaffold-vite-vue-tailwind/blob/main/vite.config.mts の base をリポジトリ名に変更してください。

```json
{
-  base: "scaffold-vite-vue-tailwind/",
+  base: "my-project/",
}
```

GitHub Pages が不要な場合は、この設定を削除してください。

### Vercel
手動で連携してください。

## Tech Stack

- **Vue 3** - 最新のComposition APIとscript setup構文
- **Vite 6** - 高速なビルドツールと開発サーバー
- **TypeScript** - 型安全性の確保
- **Tailwind CSS 4** - ユーティリティファーストのCSSフレームワーク
- **ESLint 9** - 最新のflat config形式でのコード品質管理
- **Husky 9** + **lint-staged** - Git pre-commitフックでのコード品質確保

## Configuration Notes

### Tailwind CSS 4
このプロジェクトはTailwind CSS v4を使用しています。v3からの主な変更点：

- 設定ファイル（`tailwind.config.js`、`postcss.config.js`）が不要
- CSS内で`@import "tailwindcss"`を使用
- パフォーマンスが大幅に向上

### ESLint 9
最新のflat config形式（`eslint.config.js`）を使用しています。
