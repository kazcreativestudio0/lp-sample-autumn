#!/usr/bin/env bash
# ビルドして Cloudflare Pages にアップロード（wrangler login 済みであること）
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH="${HOME}/.local/bin:${PATH}"
npm run build
exec wrangler pages deploy dist --project-name=lp-sample-autumn
