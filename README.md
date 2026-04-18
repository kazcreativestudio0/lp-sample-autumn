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

成果物は `dist/`。ルート配信前提のため `vite.config.ts` の `base` は `/` のままです。

---

## Cloudflare Pages でデプロイ

### A. ダッシュボードから Git 連携（おすすめ）

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. リポジトリ `kazcreativestudio0/lp-sample-autumn` を選択。
3. **ビルド設定**（例）:
   | 項目 | 値 |
   |------|-----|
   | Framework preset | `None` または `Vite` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/`（リポジトリルート） |
4. **Environment variables**（任意）: 特になしで動作します。
5. **Save and Deploy**。初回ビルド後、`*.pages.dev` の URL が表示されます。

Node バージョンは **20** を使うよう、プロジェクトの **Settings → Environment variables** に `NODE_VERSION=20` を追加するか、ビルドイメージのドキュメントに従ってください（多くの環境で `.nvmrc` が読まれます）。

### B. Wrangler CLI から手動デプロイ

1. `npm install` 済みであること。
2. [API トークン](https://dash.cloudflare.com/profile/api-tokens) を作成（**Account** → **Cloudflare Pages** → **Edit** など）。
3. ログイン（初回のみ）:

   ```bash
   npx wrangler login
   ```

4. ビルドしてアップロード:

   ```bash
   npm run deploy:pages
   ```

   プロジェクト名を変える場合は `package.json` の `deploy:pages` スクリプト内の `--project-name` と `wrangler.toml` の `name` を揃えてください。

### C. GitHub Actions（このリポジトリの workflow）

`.github/workflows/cloudflare-pages.yml` が `main` への push で `dist` を Cloudflare Pages に送ります。

リポジトリの **Settings → Secrets and variables → Actions** に次を追加してください。

| Secret | 内容 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Account 用 API トークン（Pages デプロイ可能な権限） |
| `CLOUDFLARE_ACCOUNT_ID` | ダッシュボード右サイドバーの **Account ID** |

初回は Cloudflare 側に **`lp-sample-autumn`** という名前の Pages プロジェクトを作成するか、workflow の `projectName` を既存プロジェクト名に変更してください。

---

## 技術スタック

- Vite 6
- React 19
- TypeScript
- スタイルは `src/index.css` のみ
- デプロイ: [Wrangler](https://developers.cloudflare.com/workers/wrangler/) / Cloudflare Pages
