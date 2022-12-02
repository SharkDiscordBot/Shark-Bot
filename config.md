# config file

このドキュメントではconfigの作成方法を取り扱います

## configファイルの生成

### macOS,Linux全般

ターミナルで下記のコマンドを実行します
```sh
cp configs/config-sample.json configs/config.json

# ファイルを安全に保つためにパーミッションを設定してください
chmod 600 configs/config.json
```

# 設定項目

## server

| key | Type | 説明 |
| ---- | ---- | ------ |
| port | Number | 内部APIサーバーのポート番号を指定します(ステータス状況の返却等を行います) |

## settings

| key | Type | 説明 |
| ---- | ---- | ------ |
| debug_mode | Boolen | デバッグモードの有効,無効を切り替えます |
| debug_logger | Boolen | この設定を有効にすると詳細なログを出力します |

## maintenance

| key | Type | 説明 |
| ---- | ---- | ------ |
| enable | Boolen | メンテナンスモードの有効,無効無効を切り替えます |
| res_status | Number | メンテナンスモード有効時に返却するhttpステータスコードを指定します |