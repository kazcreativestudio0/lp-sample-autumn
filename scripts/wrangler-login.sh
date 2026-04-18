#!/usr/bin/env bash
# Cloudflare にブラウザでログイン（初回のみ）。完了後は ~/.wrangler に保存されます。
set -e
export PATH="${HOME}/.local/bin:${PATH}"
exec wrangler login
