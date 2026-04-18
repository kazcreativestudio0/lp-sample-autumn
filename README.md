# LPサンプル（秋シーン＋コーヒーストーリー）

Vite + React + TypeScript のランディングページデモです。冒頭はフルブリードの秋シーン、続いてスペシャルティ紹介の長文ブロックです。

## 必要環境

- Node.js 20 以降（`.nvmrc` 参照）

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

成果物は `dist/`。ルート配信のため `vite.config.ts` の `base` は `/` のままです。

---

## デプロイの流れ（**Git に push するだけ**）

日常運用は **`git add` → `git commit` → `git push origin main`** で公開を更新します。  
次の **A と B はどちらか一方だけ** を使ってください（両方有効だと **同じ push で二重ビルド** になります）。

### A. Cloudflare が GitHub を直接監視する（**おすすめ・GitHub に Secrets 不要**）

Cloudflare 側が GitHub と OAuth 連携し、`main` への push で自動ビルド・デプロイします。

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**。
2. **Create** → **Pages** → **Connect to Git**（または既存プロジェクト **`lp-sample-autumn`** の **Settings** から Git 連携を追加）。
3. リポジトリ **`kazcreativestudio0/lp-sample-autumn`** を選択。
4. ビルド設定:

   | 項目 | 値 |
   |------|-----|
   | Production branch | `main` |
   | Framework preset | `None` または `Vite` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/`（リポジトリルート） |

5. **Environment variables**（推奨）: `NODE_VERSION` = `20`  
6. **Save and Deploy**。

以降はローカルで変更をコミットして **`git push origin main`** するたびに、Cloudflare がビルドして **https://lp-sample-autumn.pages.dev/**（または設定したドメイン）が更新されます。

---

### B. GitHub Actions 経由で Cloudflare に載せる（リポジトリの Secrets が必要）

`main` へ push すると GitHub が `npm ci` → `npm run build` → Cloudflare Pages にアップロードします。

1. GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions** で次を登録:

   | Secret | 内容 |
   |--------|------|
   | `CLOUDFLARE_API_TOKEN` | [API トークン](https://dash.cloudflare.com/profile/api-tokens)（Account / Pages の編集ができるもの） |
   | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare ダッシュボード右サイドバーの **Account ID** |

2. Cloudflare プロジェクト名は **`lp-sample-autumn`**（`.github/workflows/cloudflare-pages.yml` の `projectName` と一致）。

**方式 A を使う場合**は、この workflow を無効にしてください（例: ファイル名を `cloudflare-pages.yml` → `cloudflare-pages.yml.disabled` に変更）。二重デプロイを防ぐためです。

---

### 手動デプロイ（緊急・ローカル検証用）

Wrangler で手元から `dist` を直接送る方法です。通常は **A か B** で十分です。

```bash
npm install
npx wrangler login    # 初回のみ
npm run deploy:pages  # build + wrangler pages deploy
```

補助スクリプト: `./scripts/wrangler-login.sh` / `./scripts/deploy-pages.sh`  
CLI は `~/.local/bin/wrangler` に入れている場合、`~/.zshrc` の `PATH` を読み込んでから実行してください。

---

## 技術スタック

- Vite 6
- React 19
- TypeScript
- スタイルは `src/index.css` のみ
- デプロイ: [Cloudflare Pages](https://developers.cloudflare.com/pages/)（Git 連携または GitHub Actions）
