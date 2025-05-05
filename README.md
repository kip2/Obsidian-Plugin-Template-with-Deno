# Obsidian plugin template with Deno

Denoを使ってObsidianプラグインを開発する際のテンプレートです。

## やること

### リポジトリをクローンする

開発用vaultの`.obsidian/plugins`にクローンする。

### `manifest.json`を編集する。

1. `id`と`name`と`description`は作成するプラグインに合わせたものにする。
2. `author`と`authorUrl`は変更がある場合には書き換える。
3. `isDesktopOnly`は、モバイル版で使えない機能のプラグインであれば、`true`にする。

### `deno.json`を編集する。

必要な依存関係があれば追加する。

### `main.ts`を編集する。

ターミナルで`npm run def`を入力したら、あとは`main.ts`を編集していけば良い。

## デバッグ方法

開発用vaultを立ち上げ、動作を確認しながら開発していく。

### プラグインのリロード

プラグインの設定を読み込み直す場合は、設定から一度無効にしたうえで、再度有効化すれば読み込みなおす。
