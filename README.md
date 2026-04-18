# LPサンプル（秋シーン＋コーヒーストーリー）

Vite + React + TypeScript のランディングページデモです。冒頭はフルブリードの秋シーン、続いてスペシャルティ紹介の長文ブロックです。

## 必要環境

- Node.js 20 以降推奨

## セットアップと起動

```bash
git clone https://github.com/kazcreativestudio0/lp-sample-autumn.git
cd lp-sample-autumn
npm install
npm run dev
```

開発サーバーは `http://localhost:5174`（`vite.config.ts` の `server.port`）。

## ビルド

```bash
npm run build
npm run preview
```

GitHub Pages などサブパス配信の場合は、ビルド前に `vite.config.ts` の `base` をリポジトリ名に合わせてください。

## 技術スタック

- Vite 6
- React 19
- TypeScript
- スタイルは `src/index.css` のみ
